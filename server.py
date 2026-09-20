import http.server
import socketserver
import sys
import webbrowser
from pathlib import Path

DEFAULT_PORT = 8000
DIRECTORY = Path(__file__).resolve().parent

class ClinicalPortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        str_path = str(path)
        if str_path.endswith('.js') or str_path.endswith('.mjs'):
            return 'application/javascript; charset=utf-8'
        elif str_path.endswith('.css'):
            return 'text/css; charset=utf-8'
        elif str_path.endswith('.svg'):
            return 'image/svg+xml'
        elif str_path.endswith('.json'):
            return 'application/json'
        elif str_path.endswith('.png'):
            return 'image/png'
        elif str_path.endswith('.jpg') or str_path.endswith('.jpeg'):
            return 'image/jpeg'
        return super().guess_type(path)

# Multi-threaded HTTP Server for fast concurrent requests in browser
class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

def find_available_port(start_port=DEFAULT_PORT, max_attempts=20):
    for port in range(start_port, start_port + max_attempts):
        with socketserver.TCPServer(("", port), None, bind_and_activate=False) as s:
            try:
                s.allow_reuse_address = True
                s.server_bind()
                return port
            except OSError:
                continue
    return start_port

def run_server(port=None, auto_open=False):
    target_port = port if port else find_available_port()
    
    server_address = ("", target_port)
    httpd = ThreadedHTTPServer(server_address, ClinicalPortfolioHandler)
    url = f"http://localhost:{target_port}"
    print("=" * 64)
    print("  CLINICAL PORTFOLIO - MULTI-THREADED SERVER")
    print("=" * 64)
    print(f"  Serving directory : {DIRECTORY}")
    print(f"  Local URL         : {url}")
    print("  Press Ctrl+C to stop the server.")
    print("=" * 64)
    sys.stdout.flush()
    
    if auto_open:
        webbrowser.open(url)
        
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server gracefully...")
        httpd.server_close()
        sys.exit(0)

if __name__ == '__main__':
    auto_open = '--open' in sys.argv
    port_arg = next((int(arg) for arg in sys.argv[1:] if arg.isdigit()), None)
    run_server(port=port_arg, auto_open=auto_open)
