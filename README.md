# Clinical Portfolio Website — Specialist Surgery Suite

A modern, responsive, animated, single-page interactive Clinical Portfolio Website for a Dental Surgeon / Medical Specialist (**Dr. Alexander Vance, DDS, MD, FACS**). Built using modern web standards, HTML5, Tailwind CSS, modular Vanilla ES6 JavaScript, pure CSS animations, and glassmorphism styling.

---

## Quick Start (Run Locally)

This project requires zero build tools, bundlers, or heavy npm packages. It runs immediately with Python 3:

```bash
# 1. Open terminal in the project directory
cd tooth

# 2. Start the local server
python server.py

# Or launch the server and automatically open your default browser:
python server.py --open
```

Once running, visit:
👉 **`http://localhost:8000`** (or the port indicated in the terminal if 8000 is occupied).

---

## Key Features & Components

1. **Full-Screen Logo Splash Intro** (`js/splash.js`, `css/styles.css`):
   - Concentric animated pulsing glowing rings with rotating orbital dashed tracks.
   - Luminous clinical tooth emblem glyph with drop-shadow breathing effects.
   - Dynamic percentage progress loader (0% → 100%) and specialist credentials reveal.
   - Smooth entrance triggers: "Enter Clinical Portfolio" button, mouse wheel, touch swipe, or Space/Enter keys.
   - Instant "Skip Intro" option.

2. **Sticky Glassmorphic Navigation** (`js/nav.js`):
   - Frosted acrylic header with `backdrop-filter: blur(20px)`.
   - Real-time **active scrollspy indicator** highlighting the currently viewed section.
   - Live availability badge (*"Accepting New Patients"*).
   - Mobile responsive drawer with smooth slide-in transition.

3. **High-Impact Hero Section** (`js/hero-canvas.js`):
   - Dynamic HTML5 canvas constellation grid reacting smoothly to ambient particles.
   - Board-certified accreditation badges and surgeon headline.
   - **Animated Floating Stat Counters**: 16+ Clinical Years, 14.5k+ Surgeries, 99.7% Success Rate, 100% 3D Guided Precision.

4. **Specialist Profile & Credentials** (`js/testimonials.js`):
   - Layered glassmorphic portrait frame with verified board-certification badge.
   - Comprehensive bio & surgical philosophy.
   - Interactive credentials switcher tabs (*Education & Training*, *Accreditations & Fellowships*, *Research & Innovations*).

5. **Clinical Procedures Matrix** (`js/procedures.js`):
   - Filterable category tabs (*All*, *Implantology*, *Aesthetic Veneers*, *Reconstructive & Jaw*, *Sedation Suite*).
   - Rich procedure cards with surgical duration, sedation level, recovery index, and direct booking trigger.
   - **Interactive Clinical Protocol Modal**: Deep-dive clinical breakdown covering indications, sequential surgical workflow, and primary clinical advantages.

6. **Interactive "Before & After" Clinical Case Studies Slider** (`js/comparison-slider.js`):
   - True draggable / touch-enabled split slider comparing pre-operative dental pathology against final post-surgical restorations.
   - Keyboard accessible navigation (left/right arrow keys).
   - 3 switchable clinical cases (*Full-Arch All-on-6 Zirconia*, *10-Unit Ceramic Veneers*, *Single Anterior Implant #9*).
   - Clinical Case Breakdown panel: Demographics, Pre-op condition, Post-op result, and Surgeon's clinical remarks.

7. **Robotic Navigation & Surgical Technology Showcase** (`js/main.js`):
   - Highlights 3D Planmeca CBCT scanner, X-Guide® dynamic surgical navigation, TRIOS® 5 intraoral digital scanner, and Waterlase® all-tissue laser.
   - Architectural surgical operatory suite preview.

8. **Interactive Smile & Treatment Self-Assessment Tool** (`js/treatment-quiz.js`):
   - 3-step diagnostic assessment quiz exploring clinical objective, treatment timeline, and sedation preference.
   - Generates instant personalized clinical treatment pathway recommendation and pre-fills the consultation booking form.

9. **Patient Testimonials & Reviews** (`js/testimonials.js`):
   - Verified patient outcome reviews with star ratings, procedure tags, and verified patient verification checkmarks.

10. **Consultation Booking Modal & .ICS Calendar Generator** (`js/booking-modal.js`):
    - Accessible modal with validation for patient name, contact info, procedure, target date, and twilight sedation preference.
    - Confirmation screen with unique consultation reference number.
    - **One-click "Add to Calendar (.ICS)" download** generating an RFC 5545 compliant `.ics` calendar invitation file for Apple Calendar, Google Calendar, and Outlook.

---

## File Architecture

```
tooth/
├── index.html                   # Semantic HTML5 single-page application
├── server.py                    # Lightweight Python HTTP server with MIME type handling
├── README.md                    # Project documentation
├── css/
│   └── styles.css               # Glassmorphism, animations, pulse rings, slider styling
├── js/
│   ├── doctor-data.js           # Central data store (profile, stats, procedures, cases, quiz)
│   ├── splash.js                # Splash intro with concentric glowing rings and progress bar
│   ├── nav.js                   # Sticky glassmorphic nav & active scrollspy
│   ├── hero-canvas.js           # Ambient biological/digital lattice canvas & stat counters
│   ├── comparison-slider.js     # Draggable Before & After image comparison slider
│   ├── procedures.js            # Procedure cards with filter tabs & protocol modal
│   ├── treatment-quiz.js        # Interactive diagnostic smile & treatment quiz widget
│   ├── booking-modal.js         # Appointment scheduler & .ics calendar generator
│   ├── testimonials.js          # Testimonials and credentials tab switcher
│   └── main.js                  # ES6 application coordinator
└── assets/
    ├── icons/                   # Custom medical & surgical vector icons (SVG)
    │   ├── tooth-logo.svg       # Glowing concentric dental emblem
    │   ├── arch.svg             # All-on-X full arch icon
    │   ├── implant.svg          # Precision dental implant fixture icon
    │   ├── smile.svg            # Aesthetic veneers & smile design icon
    │   ├── bone.svg             # Bone regeneration & sinus lift icon
    │   ├── jaw.svg              # Corrective orthognathic jaw surgery icon
    │   └── comfort.svg          # IV twilight sedation heart-pulse icon
    └── images/                  # High-definition clinical SVG illustrations
        ├── doctor_portrait.svg  # Specialist surgeon portrait with surgical loupes
        ├── clinic_suite.svg     # Class-A surgical operatory suite visual
        ├── case1_before.svg     # Pre-op full arch pathology
        ├── case1_after.svg      # Post-op monolithic zirconia arch
        ├── case2_before.svg     # Pre-op tetracycline staining & fractures
        ├── case2_after.svg      # Post-op micro-thin ceramic veneers
        ├── case3_before.svg     # Pre-op traumatic missing tooth #9
        └── case3_after.svg      # Post-op biologically integrated implant crown
```

---

## How to Customize for Another Specialist

To re-brand this portfolio for another doctor or medical subspecialty (e.g. Plastic Surgeon, Orthodontist, Periodontist, Dermatologist):

1. Open [`js/doctor-data.js`](file:///c:/Users/Saleh%20Elrayes/Desktop/tooth/js/doctor-data.js).
2. Edit the `doctorData.profile` object (name, credentials, contact info, surgery statistics, and bio).
3. Update `doctorData.procedures`, `doctorData.caseStudies`, or `doctorData.quizQuestions` to reflect your specific medical specialty.
4. Save the file — the changes will immediately reflect across the entire site without modifying any HTML markup!
# senna
