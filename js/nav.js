/**
 * STICKY GLASSMORPHIC NAVIGATION MODULE
 * Light medical palette with dynamic elevation, scrollspy tracking,
 * and responsive drawer management.
 */

export function initNav() {
  const navbar = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Dynamic elevation on scroll
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('bg-white/85', 'border-b', 'border-[#B1BEFB]/50', 'shadow-md', 'backdrop-blur-xl');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-white/85', 'border-[#B1BEFB]/50', 'shadow-md');
      navbar.classList.add('bg-[#DCE9FF]/50');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  const openDrawer = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('translate-x-full', 'pointer-events-none');
      mobileDrawer.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('translate-x-0');
      mobileDrawer.classList.add('translate-x-full', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => closeDrawer());
  });

  // Active Section Scrollspy
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active-nav', 'text-[#2B6CF5]');
              link.classList.remove('text-[#4A4A50]');
            } else {
              link.classList.remove('active-nav', 'text-[#2B6CF5]');
              link.classList.add('text-[#4A4A50]');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
  }
}
