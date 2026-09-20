/**
 * CLINICAL PORTFOLIO - UNIVERSAL APPLICATION SCRIPT
 * Standalone bundle compatible with both http://localhost and direct file:/// opening.
 * Zero CORS restrictions, instant splash loading, and auto-dismiss.
 */

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // DOCTOR DATA STORE
  // --------------------------------------------------------------------------
  const doctorData = {
    profile: {
      name: "Dr. Saleh Elrayes",
      firstName: "Saleh",
      titles: "BDS, DDS",
      specialty: "Cosmetic & Restorative Dentistry Specialist",
      subspecialties: "Aesthetic Porcelain Veneers • Biomimetic Fracture Reconstruction • 3D Digital Smile Design",
      tagline: "Biomimetic Artistry. Preserving Natural Structure, Perfecting Smiles.",
      bioShort: "Cosmetic and restorative dental surgeon recognized for minimally invasive aesthetic smile design, traumatic tooth fracture repair, and micro-thin porcelain restorations.",
      bioLong: "Dr. Saleh Elrayes combines precise biomimetic science with artistic dental mastery. Specializing in cosmetic and restorative dentistry, Dr. Elrayes utilizes high-resolution digital smile design and micro-invasive protocols that preserve maximum natural tooth enamel. From complex incisal trauma reconstructions to custom microdontia and diastema closures, Dr. Elrayes delivers natural, harmonious smiles that restore lasting confidence.",
      experienceYears: 10,
      totalProcedures: "10,000+",
      successRate: "99.8%",
      patientSatisfaction: "99.6%",
      hospitalAffiliations: "International Academy of Cosmetic Dentistry • Advanced Restorative Surgical Center",
      licenseInfo: "Board Certified Cosmetic & Restorative Dental Surgery",
      consultationHours: "Mon – Fri: 9:00 AM – 7:00 PM • Sat: 10:00 AM – 4:00 PM",
      location: "Elite Dental & Aesthetics Suite, Manhattan, NY",
      phone: "+1 (212) 555-7389",
      emergencyHotline: "+1 (212) 555-7399",
      email: "contact@drsalehelrayes.com",
      avatarHero: "assets/images/doctor_hero.jpg",
      avatarOriginal: "assets/images/doctor_raw.jpg",
      crystalTooth: "assets/images/crystal_tooth.png"
    },

    stats: [
      { label: "Satisfied Patients", value: "10k+", suffix: "", desc: "Transformative smiles restored" },
      { label: "Patient Rating", value: "4.9", suffix: " ★", desc: "Recommended by leading clinics" },
      { label: "Clinical Success", value: "99.8%", suffix: "", desc: "Documented restoration survival" },
      { label: "Enamel Preservation", value: "95%", suffix: "", desc: "Minimally invasive biomimetic prep" }
    ],

    credentials: {
      education: [
        { year: "2014", degree: "Bachelor of Dental Surgery (BDS) - Honors", institution: "Faculty of Dentistry" },
        { year: "2017", degree: "Doctor of Dental Surgery (DDS)", institution: "College of Dental Medicine" },
        { year: "2019", degree: "Master Fellowship in Biomimetic Restorative Dentistry", institution: "Academy of Biomimetic Dentistry" },
        { year: "2021", degree: "Advanced Certification in Digital Smile Design (DSD) & Ceramic Veneers", institution: "International Aesthetic Dental Institute" }
      ],
      accreditations: [
        "Member, American Academy of Cosmetic Dentistry (AACD)",
        "Diplomate, International Congress of Aesthetic Restorations",
        "Certified Master, Digital Smile Design (DSD) Workflow",
        "Specialist Fellow, Biomimetic Dental Architecture & Adhesive Restorations"
      ],
      innovations: [
        "Pioneered the LayeredNano™ composite stratification protocol for anterior edge trauma.",
        "Published clinical techniques on non-prep and ultra-thin microdontia lateral management.",
        "Developed custom digital shade mapping for seamless tooth-to-restoration translucency blending."
      ]
    },

    procedures: [
      {
        id: "trauma-fracture",
        category: "restorative",
        name: "Traumatic Fracture & Incisal Edge Reconstruction",
        tagline: "Biomimetic restoration of broken or fractured central incisors",
        icon: "smile",
        badge: "Clinical Case 1",
        duration: "60 – 90 Mins",
        anesthesia: "Gentle Local Anesthesia",
        recovery: "Immediate",
        summary: "Restoring traumatic enamel and dentin fractures with high-performance nano-hybrid composite stratification or porcelain ceramic chips, perfectly replicating natural light transmission and mamelon anatomy.",
        details: {
          indication: "Sports trauma, accidental falls, fractured incisal thirds, or structural enamel breaks.",
          clinicalSteps: [
            "Pulp vitality diagnostic assessment and micro-abrasion of fractured enamel margins.",
            "Star-bevel preparation for seamless optical margin invisibility.",
            "Anatomical polychromatic stratification layering dentin opacity and enamel translucency.",
            "High-gloss multi-step diamond polishing matching adjacent natural tooth texture."
          ],
          benefits: ["Single-visit smile restoration", "Zero healthy tooth structure removed unnecessarily", "Imperceptible optical color transition", "Full functional biting strength restored"]
        }
      },
      {
        id: "peg-lateral",
        category: "aesthetic",
        name: "Peg Lateral & Diastema Veneer Closure",
        tagline: "Harmonizing undersized teeth and closing gaps with micro-thin ceramics",
        icon: "arch",
        badge: "Clinical Case 2",
        duration: "2 Visits",
        anesthesia: "Needle-Free Comfort",
        recovery: "Immediate",
        summary: "Transforming congenital peg laterals or disproportionate gaps into symmetrical, golden-ratio teeth using bespoke feldspathic or lithium disilicate porcelain veneers with zero-to-minimal enamel prep.",
        details: {
          indication: "Congenital peg laterals, microdontia, uneven anterior spacing, or persistent midline diastema.",
          clinicalSteps: [
            "Digital optical 3D scan and facial-driven aesthetic smile design.",
            "3D aesthetic trial mock-up placed in mouth for patient shape approval.",
            "Ultra-conservative enamel preparation preserving over 95% of natural enamel.",
            "Precision adhesive resin cementation under rubber dam isolation."
          ],
          benefits: ["Completely closes unwanted dark spaces and gaps", "Sculpts ideal tooth width and papilla emergence", "Resistant to coffee and tea staining", "Preserves natural biological tooth structure"]
        }
      },
      {
        id: "aesthetic-veneers",
        category: "aesthetic",
        name: "Micro-Thin Feldspathic Porcelain Veneers",
        tagline: "Bespoke ceramic veneers crafted to golden facial proportions",
        icon: "smile",
        badge: "Signature Aesthetic",
        duration: "2 Appointments",
        anesthesia: "Comfort Local",
        recovery: "Immediate",
        summary: "Custom hand-crafted 0.3mm porcelain veneers that transform tooth color, alignment, and incisal aesthetics while preserving healthy natural enamel.",
        details: {
          indication: "Severe discoloration, enamel hypoplasia, minor crowding, or worn incisal edges.",
          clinicalSteps: [
            "Digital Smile Design (DSD) video capture and 3D virtual simulation.",
            "Direct intraoral prototype test drive.",
            "Microscopic enamel preparation.",
            "Master ceramist hand-glaze fabrication and bonded seating."
          ],
          benefits: ["Natural light transmission and luminescence", "Non-porous ceramic never stains", "Long-term adhesive durability"]
        }
      },
      {
        id: "all-on-x",
        category: "implants",
        name: "Full Arch All-on-X Dental Restoration",
        tagline: "Immediate fixed hybrid teeth for complete arch revitalization",
        icon: "arch",
        badge: "Full Smile Makeover",
        duration: "3 – 4 Hours",
        anesthesia: "IV Twilight Sedation / Sleep",
        recovery: "24 – 48 Hours",
        summary: "Permanent fixed monolithic zirconia arch anchored on 4 to 6 titanium implants, giving patients full chewing function and an exquisite natural smile in 24 hours.",
        details: {
          indication: "Multiple failing bridges, advanced tooth wear, or complete edentulism.",
          clinicalSteps: [
            "3D CBCT digital scan and computer-guided virtual surgery.",
            "Minimally invasive implant placement under comfortable sedation.",
            "Delivery of fixed provisional zirconia teeth with zero palate coverage."
          ],
          benefits: ["Immediate chewing and speaking ability", "Fixed permanently (never slips)", "Preserves youthful jawbone architecture"]
        }
      },
      {
        id: "guided-implants",
        category: "implants",
        name: "Guided Single & Multi-Tooth Implants",
        tagline: "Sub-millimeter 3D robotic precision for single tooth replacement",
        icon: "implant",
        badge: "Minimally Invasive",
        duration: "45 Mins",
        anesthesia: "Local Anesthesia / Nitrous",
        recovery: "Same Day",
        summary: "Robotic navigation templates ensure optimal depth, angulation, and immediate biological tissue emergence for permanent single tooth replacement.",
        details: {
          indication: "Single missing tooth or fractured roots.",
          clinicalSteps: [
            "Virtual 3D implant positioning avoiding anatomical nerves.",
            "Flapless keyhole osteotomy with rapid recovery.",
            "Biocompatible titanium fixture and custom healing abutment."
          ],
          benefits: ["Zero stitches needed in most cases", "Looks and feels like a natural tooth", "Lifetime stability"]
        }
      },
      {
        id: "sedation-suite",
        category: "sedation",
        name: "Comfort & Twilight Sedation Care",
        tagline: "Completely relaxed, pain-free dental treatments",
        icon: "comfort",
        badge: "Zero Anxiety",
        duration: "Procedure Dependent",
        anesthesia: "IV Sedation / Nitrous Oxide",
        recovery: "30 Mins Post-Op",
        summary: "Modern comfort dentistry protocols allowing patients with dental anxiety or busy schedules to complete extensive cosmetic treatments in peaceful relaxation.",
        details: {
          indication: "Dental phobia, sensitive gag reflex, or comprehensive multi-tooth appointments.",
          clinicalSteps: [
            "Pre-sedation medical assessment and continuous vital monitoring.",
            "Gentle administration of rapid-clearing soothing sedative.",
            "Wake up with your treatment completely finished."
          ],
          benefits: ["Zero stress, zero recollection of sounds or smells", "Multiple procedures done in one visit", "Smooth, quick recovery"]
        }
      }
    ],

    caseStudies: [
      {
        id: "case-fracture",
        category: "Direct Restorative",
        title: "Traumatic Central Incisor Fracture Repair",
        patient: "Young Adult Patient • Impact Trauma",
        preOpDesc: "Severe oblique crown fracture of maxillary central incisors (#8 and #9) with incisal third loss and exposed dentin following accidental impact.",
        postOpDesc: "Biomimetic polychromatic nano-hybrid composite reconstruction with multi-layered mamelons and high-gloss polish, flawlessly matching natural smile anatomy.",
        treatmentTime: "Single Visit (75 Minutes)",
        beforeImg: "assets/images/case_fracture_before.jpg",
        afterImg: "assets/images/case_fracture_after.jpg",
        clinicalNotes: "Zero pulp exposure. Bevel preparation provided imperceptible optical margin blending. Functional occlusion verified in protrusive and lateral excursions."
      },
      {
        id: "case-peg",
        category: "Cosmetic Veneers",
        title: "Peg Lateral & Diastema Aesthetic Transformation",
        patient: "Adult Patient • Congenital Microdontia",
        preOpDesc: "Undersized congenital peg lateral incisor creating prominent bilateral gaps (diastemas) and disproportionate smile symmetry.",
        postOpDesc: "Ultra-thin feldspathic porcelain veneer with custom emergence contour, completely closing the diastemas and harmonizing the smile arch.",
        treatmentTime: "2 Appointments (7 Days)",
        beforeImg: "assets/images/case_peg_before.jpg",
        afterImg: "assets/images/case_peg_after.jpg",
        clinicalNotes: "Minimally invasive prep preserving 95% of healthy enamel. Soft tissue gingival zenith sculpted for ideal interdental papilla fill."
      },
      {
        id: "case-allonx",
        category: "Full Arch Rehabilitation",
        title: "Immediate Load All-on-6 Zirconia Reconstruction",
        patient: "Male, 52 • Executive",
        preOpDesc: "Terminal periodontal disease with severe mobility, chronic discomfort, and loss of vertical dimension.",
        postOpDesc: "Full-arch monolithic zirconia bridges over 6 NobelActive fixtures delivered in 24 hours. Full chewing function restored.",
        treatmentTime: "1 Day Surgical • 4 Mos Final",
        beforeImg: "assets/images/case1_before.svg",
        afterImg: "assets/images/case1_after.svg",
        clinicalNotes: "Utilized guided 3D surgical guide with flapless osteotomy. Restored 4.5mm of lost bite height."
      }
    ],

    technologies: [
      {
        title: "Planmeca ProMax® 3D CBCT",
        category: "Ultra-Low Dose Imaging",
        description: "Delivers crystal-clear 3D volumetric reconstructions of bone morphology, root canals, and nerve anatomy with 77% lower radiation.",
        highlight: "75-micron ultra high resolution"
      },
      {
        title: "3Shape TRIOS® 5 Intraoral Scanner",
        category: "Digital Impression & DSD",
        description: "High-speed optical scanning produces photo-realistic color 3D digital impressions in seconds, eliminating gooey impression trays.",
        highlight: "100% impression tray-free"
      },
      {
        title: "Digital Smile Design (DSD) Studio",
        category: "Facial Aesthetic Simulation",
        description: "Dynamic video and photographic analysis allowing patients to visually preview their custom ceramic veneers in 3D prior to treatment.",
        highlight: "3D smile trial preview"
      },
      {
        title: "Biolase® Waterlase iPlus Painless Laser",
        category: "Gentle Tissue Sculpting",
        description: "Combines laser energy with a gentle water spray to sculpt gumlines and treat tissue without heat or scalpels, accelerating healing.",
        highlight: "Virtually painless gum sculpting"
      }
    ],

    testimonials: [
      {
        patient: "Sophie Laurent",
        procedure: "Traumatic Fracture Repair",
        rating: 5,
        date: "2 weeks ago",
        verified: true,
        quote: "I broke my front teeth in an accident and thought my smile was ruined forever. Dr. Saleh restored both teeth in a single visit with such perfection that not even my family can tell they were ever chipped. He is a true artist!"
      },
      {
        patient: "Alexander Mitchell",
        procedure: "Peg Lateral Porcelain Veneer",
        rating: 5,
        date: "1 month ago",
        verified: true,
        quote: "I had a tiny peg tooth and gaps my whole life. Dr. Saleh designed a custom veneer that closed the space and looks so completely natural. The office is gorgeous and the process was so gentle and fast."
      },
      {
        patient: "Kareem El-Sayed",
        procedure: "Cosmetic Smile Makeover",
        rating: 5,
        date: "2 months ago",
        verified: true,
        quote: "Dr. Saleh Elrayes is hands down the best cosmetic dentist I've ever visited. The 3D preview showed me exactly what my new smile would look like before we started. World-class experience from start to finish."
      }
    ],

    quizQuestions: [
      {
        id: "objective",
        title: "What is your primary clinical objective?",
        options: [
          { label: "Repair Chipped, Broken or Fractured Teeth", icon: "smile", value: "fracture", note: "Biomimetic Bonding / Veneers" },
          { label: "Close Gaps / Fix Peg or Undersized Teeth", icon: "arch", value: "peg", note: "Porcelain Veneers & Gap Closure" },
          { label: "Replace Missing Teeth (Implants / All-on-X)", icon: "implant", value: "implants", note: "3D Guided Implants" },
          { label: "Complete Cosmetic Smile Makeover", icon: "smile", value: "aesthetic", note: "Comprehensive Smile Design" }
        ]
      },
      {
        id: "timeline",
        title: "What is your desired treatment timeline?",
        options: [
          { label: "Immediate (As Soon As Possible)", value: "immediate", note: "Priority expedited clinic slot" },
          { label: "Within the Next 1 to 3 Months", value: "medium", note: "Planning ahead & scheduling" },
          { label: "Exploring Expert Recommendations", value: "exploring", note: "Consultation & treatment estimate" }
        ]
      },
      {
        id: "comfort",
        title: "What is your comfort & sedation preference?",
        options: [
          { label: "Gentle Local Anesthesia (Quick & Numb)", value: "local", note: "Standard comfortable care" },
          { label: "Conscious Sedation / Nitrous Oxide", value: "nitrous", note: "Relaxed and calm throughout" },
          { label: "IV Twilight Sedation (Sleep Through It)", value: "iv-sedation", note: "Highest comfort, wake up finished" }
        ]
      }
    ]
  };

  // --------------------------------------------------------------------------
  // SPLASH SCREEN INTRO (Instant load & auto-dismiss)
  // --------------------------------------------------------------------------
  function initSplash(onComplete) {
    const splash = document.getElementById('splash-screen');
    const progressBar = document.getElementById('splash-progress-bar');
    const progressPercent = document.getElementById('splash-progress-percent');
    const statusText = document.getElementById('splash-status-text');
    const enterBtn = document.getElementById('splash-enter-btn');
    const skipBtn = document.getElementById('splash-skip-btn');

    if (!splash) return;

    let progress = 0;
    let isExited = false;
    let timerId = null;

    const exitSplash = () => {
      if (isExited) return;
      isExited = true;
      if (timerId) clearInterval(timerId);

      splash.classList.add('splash-hidden');
      document.body.classList.remove('overflow-hidden');

      setTimeout(() => {
        splash.style.display = 'none';
        if (typeof onComplete === 'function') onComplete();
        window.dispatchEvent(new CustomEvent('portfolio:entered'));
      }, 700);
    };

    // Smooth linear loading over ~900ms
    timerId = setInterval(() => {
      if (isExited) return;
      progress += Math.floor(Math.random() * 8) + 5;
      if (progress > 100) progress = 100;

      if (progressBar) progressBar.style.width = progress + '%';
      if (progressPercent) progressPercent.textContent = progress + '%';

      if (progress >= 100) {
        clearInterval(timerId);
        if (statusText) statusText.textContent = "Clinical Suite Ready";
        if (enterBtn) {
          enterBtn.classList.remove('opacity-0', 'pointer-events-none');
          enterBtn.classList.add('opacity-100');
        }
        // Auto-dismiss automatically after reaching 100%
        setTimeout(exitSplash, 350);
      }
    }, 35);

    // Click anywhere on splash screen to enter immediately
    splash.addEventListener('click', exitSplash);
    if (skipBtn) skipBtn.addEventListener('click', (e) => { e.stopPropagation(); exitSplash(); });
    if (enterBtn) enterBtn.addEventListener('click', (e) => { e.stopPropagation(); exitSplash(); });

    // Wheel or keypress to enter
    window.addEventListener('wheel', exitSplash, { passive: true, once: true });
    window.addEventListener('keydown', (e) => {
      if (['Space', 'Enter', 'ArrowDown'].includes(e.code)) exitSplash();
    }, { once: true });

    // Failsafe auto-dismiss after 2.5 seconds no matter what
    setTimeout(exitSplash, 2500);
  }

  // --------------------------------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------------------------------
  function initNav() {
    const navbar = document.getElementById('main-nav');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 30) {
        navbar.classList.add('bg-white/90', 'border-b', 'border-[#B1BEFB]/50', 'shadow-md', 'backdrop-blur-xl');
        navbar.classList.remove('bg-[#DCE9FF]/60');
      } else {
        navbar.classList.remove('bg-white/90', 'border-[#B1BEFB]/50', 'shadow-md');
        navbar.classList.add('bg-[#DCE9FF]/60');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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

    mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));

    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href === '#' + currentId) {
                link.classList.add('active-nav', 'text-[#2B6CF5]');
                link.classList.remove('text-[#4A4A50]');
              } else {
                link.classList.remove('active-nav', 'text-[#2B6CF5]');
                link.classList.add('text-[#4A4A50]');
              }
            });
          }
        });
      }, { rootMargin: '-20% 0px -65% 0px' });

      sections.forEach(sec => observer.observe(sec));
    }
  }

  // --------------------------------------------------------------------------
  // HERO CANVAS & COUNTERS
  // --------------------------------------------------------------------------
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let isVisible = true;

    const resize = () => {
      width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.parentElement.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(35, Math.floor((width * height) / 26000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.2,
          color: Math.random() > 0.5 ? 'rgba(43, 108, 245, ' : 'rgba(207, 163, 246, ',
          alpha: Math.random() * 0.35 + 0.15
        });
      }
    };

    const draw = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const edgeAlpha = (1 - dist / 140) * 0.16;
            ctx.strokeStyle = 'rgba(177, 190, 251, ' + edgeAlpha + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    const heroSection = document.getElementById('hero');
    if (heroSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationId);
          draw();
        }
      }, { threshold: 0.1 });
      observer.observe(heroSection);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  function animateStatCounters() {
    const statElements = document.querySelectorAll('[data-counter-target]');
    if (!statElements.length) return;

    statElements.forEach(el => {
      const targetStr = el.getAttribute('data-counter-target');
      const isFloat = targetStr.includes('.');
      const targetNum = parseFloat(targetStr);
      const duration = 1600;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeProgress * targetNum;

        el.textContent = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = isFloat ? targetNum.toFixed(1) : targetNum;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }

  // --------------------------------------------------------------------------
  // DYNAMIC CLINICAL CASE FEED & MULTI-PHOTO LIGHTBOX GALLERY
  // --------------------------------------------------------------------------
  let currentGalleryCase = null;
  let currentGalleryIndex = 0;

  function parseCasePhotos(rawImages, fallbackSingle = '') {
    if (Array.isArray(rawImages)) {
      return rawImages.filter(img => typeof img === 'string' && img.trim().length > 0);
    }
    if (typeof rawImages === 'string') {
      const trimmed = rawImages.trim();
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.filter(i => typeof i === 'string' && i.trim().length > 0);
          }
        } catch (e) {}
      }
      if (trimmed.includes(',')) {
        const split = trimmed.split(',').map(s => s.trim()).filter(Boolean);
        if (split.length > 0) return split;
      }
      if (trimmed.length > 0) return [trimmed];
    }
    if (fallbackSingle && typeof fallbackSingle === 'string' && fallbackSingle.trim().length > 0) {
      return [fallbackSingle.trim()];
    }
    return ['assets/images/doctor_case_fracture.jpg'];
  }

  function getLocalOrSeedCases() {
    try {
      const localData = localStorage.getItem('dr_saleh_clinical_cases_v1');
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}

    // Initial default seed cases
    return [
      {
        id: "case-seed-1",
        title: "Traumatic Incisor Fracture Reconstruction",
        category: "Restorative",
        tooth_location: "Maxillary Centrals (#8, #9)",
        diagnosis: "Complicated Enamel & Dentin Fracture with Incisal Third Loss",
        treatment_date: "2026-03-12",
        clinical_narrative: "Patient presented following acute sports impact trauma with severe oblique crown fractures on maxillary central incisors (#8 & #9). Performed polychromatic nano-hybrid composite stratification with multi-layered anatomical mamelons, star-bevel margins, and high-gloss diamond polish in a single 75-minute visit.",
        highlights: "Single-visit biomimetic restoration; Zero pulp compromise; Natural light transmission translucency",
        tags: ["TraumaDentistry", "BiomimeticDentistry", "IncisalFracture", "Restorative", "DrSalehElrayes"],
        images: [
          "assets/images/doctor_case_fracture.jpg",
          "assets/images/case_fracture_before.jpg",
          "assets/images/case_fracture_after.jpg"
        ]
      },
      {
        id: "case-seed-2",
        title: "Laser Gingival Recontouring & Crown Lengthening",
        category: "Aesthetics",
        tooth_location: "Anterior Sextant (#6 - #11)",
        diagnosis: "Excessive Gingival Display ('Gummy Smile') & Asymmetrical Zeniths",
        treatment_date: "2026-03-05",
        clinical_narrative: "Treating an excessive gingival display ('gummy smile') with asymmetrical scalloped gum zeniths. High-precision all-tissue Waterlase laser gingivectomy revealing natural anatomical tooth dimensions. Instant coagulation achieved with zero scalpels, zero sutures, and rapid 48-hour recovery.",
        highlights: "High-precision all-tissue laser; Zero scalpels or sutures; 48-hour tissue recovery",
        tags: ["LaserDentistry", "GummySmile", "Gingivectomy", "Waterlase", "AestheticCrownLengthening"],
        images: [
          "assets/images/case_gingivectomy_lengthening.jpg"
        ]
      },
      {
        id: "case-seed-3",
        title: "Congenital Peg Lateral & Diastema Veneer Closure",
        category: "Restorative",
        tooth_location: "Maxillary Laterals (#7, #10)",
        diagnosis: "Bilateral Microdontia / Peg Laterals with Prominent Anterior Spacing",
        treatment_date: "2026-02-28",
        clinical_narrative: "Congenitally undersized lateral incisor causing prominent gaps on both sides. Fabricated non-prep micro-thin feldspathic porcelain veneer preserving 95%+ of natural enamel. Custom cervical emergence profile sculpted to generate natural interdental pink papilla fill.",
        highlights: "95%+ natural enamel preserved; Custom cervical emergence profile; Ideal papilla fill",
        tags: ["PegLateral", "DiastemaClosure", "PorcelainVeneers", "Microdontia", "CosmeticDentistry"],
        images: [
          "assets/images/doctor_case_peg_lateral.jpg",
          "assets/images/case_peg_before.jpg",
          "assets/images/case_peg_after.jpg"
        ]
      },
      {
        id: "case-seed-4",
        title: "Comprehensive Endodontic & Anterior Reconstruction",
        category: "Endodontics",
        tooth_location: "Maxillary Anterior Quad (#6 - #9)",
        diagnosis: "Chronic Apical Periodontitis & Severe Aesthetic Compromise",
        treatment_date: "2026-02-14",
        clinical_narrative: "High-complexity anterior restoration combining endodontic therapy, digital analysis, and ceramic rehabilitation. Digital Smile Design facial grid analysis, precision rubber dam isolation, microscopic endodontic sealing, and definitive aesthetic ceramic crowns creating full smile symmetry.",
        highlights: "Digital Smile Design facial grid; Rubber dam isolation; Microscopic endodontic sealing",
        tags: ["Endodontics", "DigitalSmileDesign", "RubberDam", "Multidisciplinary", "SmileRestoration"],
        images: [
          "assets/images/case_multistep_restoration.jpg"
        ]
      },
      {
        id: "case-seed-5",
        title: "Posterior Biomimetic Composite & Cusp Sculpting",
        category: "Restorative",
        tooth_location: "Mandibular First Molar (#19)",
        diagnosis: "Deep Dentin Caries with Undermined Cuspal Architecture",
        treatment_date: "2026-01-20",
        clinical_narrative: "Deep dentin caries removal and anatomical cusp sculpting under strict rubber dam isolation (clamp #26). Atraumatic excavation, Immediate Dentin Sealing (IDS), and biomimetic composite layering replicating natural fissure anatomy, contact points, and biological biting biomechanics.",
        highlights: "Immediate Dentin Sealing (IDS); Rubber dam isolation; Biomimetic cusp sculpting",
        tags: ["BiomimeticDentistry", "RubberDam", "PosteriorComposite", "CariesRemoval", "ToothConservation"],
        images: [
          "assets/images/case_posterior_biomimetic.jpg"
        ]
      }
    ];
  }

  async function renderDynamicCasesFeed() {
    const container = document.getElementById('cases-feed-grid');
    if (!container) return;

    let cases = getLocalOrSeedCases();

    // Attempt Supabase fetch if SDK and config are present
    const customUrl = localStorage.getItem('custom_supabase_url') || window.SUPABASE_URL;
    const customKey = localStorage.getItem('custom_supabase_key') || window.SUPABASE_ANON_KEY;
    if (window.supabase && typeof window.supabase.createClient === 'function' && customUrl && customKey) {
      try {
        const client = window.supabase.createClient(customUrl, customKey);
        const { data, error } = await client
          .from('clinical_cases')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && Array.isArray(data) && data.length > 0) {
          cases = data;
          try {
            localStorage.setItem('dr_saleh_clinical_cases_v1', JSON.stringify(data));
          } catch (e) {}
        }
      } catch (err) {
        console.warn("Supabase fetch fallback to local store:", err);
      }
    }

    container.innerHTML = '';

    cases.forEach((item, index) => {
      const photos = parseCasePhotos(item.images || item.image || item.image_url, item.cover_image);
      const coverPhoto = photos[0] || 'assets/images/doctor_case_fracture.jpg';
      const count = photos.length;
      const tagsList = Array.isArray(item.tags) 
        ? item.tags 
        : (typeof item.tags === 'string' ? item.tags.split(',').map(t => t.trim()).filter(Boolean) : []);

      const article = document.createElement('article');
      article.className = 'bg-white rounded-3xl border border-[#B1BEFB]/60 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between';

      article.innerHTML = `
        <div>
          <!-- Post Header -->
          <div class="p-4 flex items-center justify-between border-b border-slate-100">
            <div class="flex items-center gap-3">
              <div class="p-[2px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                <img src="assets/images/doctor_raw.jpg" alt="Dr. Saleh Elrayes" class="w-9 h-9 rounded-full object-cover border-2 border-white">
              </div>
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-xs font-extrabold text-[#00000F]">dr.salehelrayes</span>
                  <svg class="w-3.5 h-3.5 text-[#2B6CF5] fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                </div>
                <span class="text-[10px] text-slate-500 font-medium">Manhattan, NY • ${item.category || 'Restorative'}</span>
              </div>
            </div>
            <button class="text-slate-400 hover:text-[#00000F] font-bold text-lg px-1 cursor-pointer open-gallery-btn" data-case-index="${index}" aria-label="Open clinical photo gallery">
              •••
            </button>
          </div>

          <!-- Post Clinical Photo with Multi-Photo Badge and Lightbox Trigger -->
          <div class="relative bg-slate-950 cursor-pointer group overflow-hidden open-gallery-btn" data-case-index="${index}">
            <img src="${coverPhoto}" alt="${item.title}" class="w-full h-auto object-cover max-h-[360px] group-hover:scale-102 transition-transform duration-300">
            
            <!-- Category / Treatment Pill -->
            <span class="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow">
              ${item.tooth_location || 'CLINICAL CASE'}
            </span>

            <!-- Multi-Photo Count Badge (e.g. 3 Photos) -->
            ${count > 1 ? `
              <span class="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow flex items-center gap-1.5">
                <svg class="w-3 h-3 text-[#B1BEFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span>${count} Photos</span>
              </span>
            ` : ''}

            <!-- Hover View Gallery Cue -->
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span class="px-4 py-2 rounded-full bg-white/90 text-[#00000F] font-bold text-xs shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#2B6CF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>View Full Gallery</span>
              </span>
            </div>
          </div>

          <!-- Post Action Icons -->
          <div class="p-4 pb-2">
            <div class="flex items-center justify-between mb-2.5">
              <div class="flex items-center gap-4 text-[#00000F]">
                <button class="like-btn hover:text-rose-500 transition-colors" aria-label="Like post">
                  <svg class="w-6 h-6 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </button>
                <button class="open-gallery-btn hover:text-[#2B6CF5] transition-colors" data-case-index="${index}" aria-label="View photo album">
                  <svg class="w-6 h-6 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </button>
                <button class="hover:text-[#2B6CF5] transition-colors" aria-label="Share post" onclick="navigator.clipboard && navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!');">
                  <svg class="w-6 h-6 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </div>
              <button class="hover:text-[#2B6CF5] transition-colors" aria-label="Save post">
                <svg class="w-6 h-6 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </button>
            </div>

            <div class="text-xs font-bold text-[#00000F] mb-2">
              Liked by <span class="font-extrabold text-[#2B6CF5]">1,${(420 + index * 115) % 900 + 100} clinicians and patients</span>
            </div>
          </div>

          <!-- Post Bio / Caption (Always Visible Directly Without Clicking) -->
          <div class="px-4 pb-4 text-xs text-[#4A4A50] space-y-2 leading-relaxed">
            <p>
              <strong class="font-extrabold text-[#00000F] mr-1">dr.salehelrayes</strong>
              <strong>${item.title}:</strong> ${item.clinical_narrative || item.diagnosis || ''}
            </p>
            ${item.highlights ? `
              <p class="bg-[#DCE9FF]/40 p-2.5 rounded-xl border border-[#B1BEFB]/40 text-[11px] text-[#00000F]">
                🔬 <strong>Clinical Protocol:</strong> ${item.highlights}
              </p>
            ` : ''}
            ${tagsList.length > 0 ? `
              <div class="text-[#2B6CF5] font-semibold text-[11px] space-x-1 pt-1">
                ${tagsList.map(t => `<span>#${t.replace(/^#/, '')}</span>`).join(' ')}
              </div>
            ` : ''}
            <span class="block text-[10px] text-slate-400 uppercase tracking-wider font-bold pt-1">
              ${item.treatment_date || 'RECENT CASE'}
            </span>
          </div>
        </div>
      `;

      container.appendChild(article);
    });

    // Append Consultation Feature Card
    const ctaCard = document.createElement('article');
    ctaCard.className = 'bg-gradient-to-br from-[#2B6CF5] to-[#1f57d6] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden';
    ctaCard.innerHTML = `
      <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
      <div>
        <span class="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full inline-block mb-4">
          Private Care
        </span>
        <h3 class="text-2xl font-black mb-3 leading-snug">Have a similar dental concern?</h3>
        <p class="text-xs text-white/90 leading-relaxed mb-6 font-medium">
          Whether you have a fractured tooth, unwanted spacing, or are looking for a complete smile design, Dr. Saleh Elrayes provides personalized biomimetic care.
        </p>
        <ul class="text-xs space-y-2.5 mb-8 text-white/95 font-medium">
          <li class="flex items-center gap-2">✓ Painless, single-visit tooth fracture repairs</li>
          <li class="flex items-center gap-2">✓ Bespoke ultra-thin porcelain veneers</li>
          <li class="flex items-center gap-2">✓ 3D Digital Smile Design preview</li>
          <li class="flex items-center gap-2">✓ Gentle laser gum recontouring</li>
        </ul>
      </div>

      <button class="open-booking-modal-btn w-full py-4 rounded-full bg-white hover:bg-slate-50 text-[#2B6CF5] font-extrabold text-xs shadow-lg transition-all text-center">
        Schedule Your Case Assessment ↗
      </button>
    `;
    container.appendChild(ctaCard);

    // Bind Like Buttons
    container.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const svg = btn.querySelector('svg');
        const isLiked = btn.getAttribute('data-liked') === 'true';
        if (!isLiked) {
          btn.setAttribute('data-liked', 'true');
          btn.classList.add('text-rose-500');
          btn.classList.remove('hover:text-rose-500');
          if (svg) {
            svg.classList.remove('fill-none');
            svg.classList.add('fill-current');
          }
          btn.style.transform = 'scale(1.25)';
          setTimeout(() => { btn.style.transform = 'scale(1)'; }, 180);
        } else {
          btn.setAttribute('data-liked', 'false');
          btn.classList.remove('text-rose-500');
          btn.classList.add('hover:text-rose-500');
          if (svg) {
            svg.classList.add('fill-none');
            svg.classList.remove('fill-current');
          }
        }
      });
    });

    // Bind Lightbox Openers
    container.querySelectorAll('.open-gallery-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const caseIdx = parseInt(el.getAttribute('data-case-index'));
        if (!isNaN(caseIdx) && cases[caseIdx]) {
          openLightboxModal(cases[caseIdx], 0);
        }
      });
    });

    // Re-bind booking triggers on newly rendered card
    document.querySelectorAll('.open-booking-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = document.getElementById('booking-modal');
        if (modal) modal.classList.remove('hidden');
      });
    });
  }

  // --------------------------------------------------------------------------
  // MULTI-PHOTO LIGHTBOX MODAL CONTROLLER
  // --------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');
  const lightboxMainImg = document.getElementById('lightbox-main-img');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxCounterPill = document.getElementById('lightbox-counter-pill');
  const lightboxThumbnailsStrip = document.getElementById('lightbox-thumbnails-strip');

  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxDate = document.getElementById('lightbox-date');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxTooth = document.getElementById('lightbox-tooth');
  const lightboxDiagnosis = document.getElementById('lightbox-diagnosis');
  const lightboxNarrative = document.getElementById('lightbox-narrative');
  const lightboxHighlights = document.getElementById('lightbox-highlights');
  const lightboxHighlightsContainer = document.getElementById('lightbox-highlights-container');
  const lightboxTags = document.getElementById('lightbox-tags');

  function openLightboxModal(caseItem, startIndex = 0) {
    if (!lightboxModal || !caseItem) return;

    currentGalleryCase = caseItem;
    currentGalleryCase._parsedPhotos = parseCasePhotos(caseItem.images || caseItem.image || caseItem.image_url, caseItem.cover_image);
    currentGalleryIndex = Math.max(0, Math.min(startIndex, currentGalleryCase._parsedPhotos.length - 1));

    // Populate Sidebar Details (Omit procedure steps, focus on clinical narrative & highlights)
    if (lightboxCategory) lightboxCategory.textContent = caseItem.category || 'Restorative';
    if (lightboxDate) lightboxDate.textContent = caseItem.treatment_date || 'Recent Clinical Case';
    if (lightboxTitle) lightboxTitle.textContent = caseItem.title || 'Clinical Outcome';
    if (lightboxTooth) lightboxTooth.textContent = caseItem.tooth_location || 'Maxillary Anterior';
    if (lightboxDiagnosis) lightboxDiagnosis.textContent = caseItem.diagnosis || 'Restorative Protocol';
    if (lightboxNarrative) lightboxNarrative.textContent = caseItem.clinical_narrative || caseItem.preOpDesc || '';

    if (lightboxHighlights) {
      const rawHL = caseItem.highlights || caseItem.clinicalNotes || '';
      if (rawHL) {
        lightboxHighlightsContainer.classList.remove('hidden');
        const items = rawHL.split(';').map(s => s.trim()).filter(Boolean);
        lightboxHighlights.innerHTML = items.map(it => `
          <div class="flex items-start gap-1.5">
            <span class="text-[#2B6CF5] font-bold">✓</span>
            <span>${it}</span>
          </div>
        `).join('');
      } else {
        lightboxHighlightsContainer.classList.add('hidden');
      }
    }

    if (lightboxTags) {
      const tags = Array.isArray(caseItem.tags) 
        ? caseItem.tags 
        : (typeof caseItem.tags === 'string' ? caseItem.tags.split(',').map(t => t.trim()).filter(Boolean) : []);
      lightboxTags.innerHTML = tags.map(t => `
        <span class="px-2 py-0.5 rounded-md bg-[#D2E2FF]/60 text-[#2B6CF5] text-[10px] font-bold">
          #${t.replace(/^#/, '')}
        </span>
      `).join('');
    }

    renderActiveGalleryPhoto();
    lightboxModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeLightboxModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  function renderActiveGalleryPhoto() {
    if (!currentGalleryCase || !currentGalleryCase._parsedPhotos) return;

    const photos = currentGalleryCase._parsedPhotos;
    const total = photos.length;

    // Set Image with smooth transition
    lightboxMainImg.style.opacity = '0.3';
    setTimeout(() => {
      lightboxMainImg.src = photos[currentGalleryIndex];
      lightboxMainImg.style.opacity = '1';
    }, 80);

    // Update Counter Pill
    if (lightboxCounterPill) {
      lightboxCounterPill.textContent = `Photo ${currentGalleryIndex + 1} of ${total}`;
    }

    // Toggle Prev / Next arrows visibility if single photo
    if (total <= 1) {
      if (lightboxPrevBtn) lightboxPrevBtn.classList.add('hidden');
      if (lightboxNextBtn) lightboxNextBtn.classList.add('hidden');
      if (lightboxThumbnailsStrip) lightboxThumbnailsStrip.classList.add('hidden');
    } else {
      if (lightboxPrevBtn) lightboxPrevBtn.classList.remove('hidden');
      if (lightboxNextBtn) lightboxNextBtn.classList.remove('hidden');
      if (lightboxThumbnailsStrip) {
        lightboxThumbnailsStrip.classList.remove('hidden');
        lightboxThumbnailsStrip.innerHTML = '';

        photos.forEach((url, i) => {
          const thumbBtn = document.createElement('button');
          thumbBtn.className = `w-12 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
            i === currentGalleryIndex ? 'border-[#2B6CF5] scale-105 shadow-md' : 'border-white/30 opacity-60 hover:opacity-100'
          }`;
          thumbBtn.innerHTML = `<img src="${url}" alt="Thumbnail ${i + 1}" class="w-full h-full object-cover">`;
          thumbBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentGalleryIndex = i;
            renderActiveGalleryPhoto();
          });
          lightboxThumbnailsStrip.appendChild(thumbBtn);
        });
      }
    }
  }

  function stepGallery(delta) {
    if (!currentGalleryCase || !currentGalleryCase._parsedPhotos) return;
    const total = currentGalleryCase._parsedPhotos.length;
    if (total <= 1) return;

    currentGalleryIndex = (currentGalleryIndex + delta + total) % total;
    renderActiveGalleryPhoto();
  }

  // Gallery Navigation Events
  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightboxModal);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); stepGallery(-1); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); stepGallery(1); });

  // Close when clicking backdrop
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightboxModal();
    });
  }

  // Keyboard Arrow Navigation (← / →) & ESC to close
  window.addEventListener('keydown', (e) => {
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') {
        stepGallery(-1);
      } else if (e.key === 'ArrowRight') {
        stepGallery(1);
      } else if (e.key === 'Escape') {
        closeLightboxModal();
      }
    }
  });

  // --------------------------------------------------------------------------
  // PROCEDURES MATRIX
  // --------------------------------------------------------------------------
  function initProcedures() {
    const grid = document.getElementById('procedures-grid');
    const filterBtns = document.querySelectorAll('.proc-filter-btn');
    const modal = document.getElementById('procedure-modal');
    const modalCloseBtn = document.getElementById('close-procedure-modal');
    const modalContent = document.getElementById('procedure-modal-content');

    if (!grid) return;

    const renderCards = (category = 'all') => {
      grid.innerHTML = '';

      const filtered = category === 'all'
        ? doctorData.procedures
        : doctorData.procedures.filter(p => p.category === category);

      filtered.forEach(proc => {
        const card = document.createElement('article');
        card.className = 'glass-panel glass-panel-interactive rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group';

        card.innerHTML = `
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#2B6CF5]/5 rounded-full blur-2xl group-hover:bg-[#2B6CF5]/10 transition-all"></div>
          
          <div>
            <div class="flex items-start justify-between mb-5">
              <div class="w-14 h-14 rounded-2xl bg-[#D2E2FF]/60 border border-[#B1BEFB]/60 flex items-center justify-center p-3 shadow-sm group-hover:border-[#2B6CF5]/50 transition-colors">
                <img src="assets/icons/${proc.icon}.svg" alt="${proc.name}" class="w-8 h-8 object-contain">
              </div>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#D2E2FF] text-[#2B6CF5] border border-[#B1BEFB]/50">
                ${proc.badge}
              </span>
            </div>

            <h3 class="text-xl font-bold text-[#00000F] mb-2 group-hover:text-[#2B6CF5] transition-colors">${proc.name}</h3>
            <p class="text-xs text-[#2B6CF5] font-semibold mb-3">${proc.tagline}</p>
            <p class="text-sm text-[#4A4A50] mb-6 leading-relaxed">${proc.summary}</p>
          </div>

          <div>
            <div class="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-[#DCE9FF]/40 border border-[#B1BEFB]/30 text-xs text-[#4A4A50] mb-5">
              <div>
                <span class="block text-[10px] text-slate-500 uppercase tracking-wider font-medium">Duration</span>
                <span class="font-bold text-[#00000F]">${proc.duration}</span>
              </div>
              <div>
                <span class="block text-[10px] text-slate-500 uppercase tracking-wider font-medium">Sedation</span>
                <span class="font-bold text-[#00000F] truncate block">${proc.anesthesia.split('/')[0]}</span>
              </div>
              <div>
                <span class="block text-[10px] text-slate-500 uppercase tracking-wider font-medium">Recovery</span>
                <span class="font-bold text-[#2B6CF5]">${proc.recovery}</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <button class="view-proc-btn flex-1 py-2.5 px-4 rounded-full bg-white hover:bg-[#D2E2FF]/60 text-[#2B6CF5] text-xs font-bold border border-[#B1BEFB]/60 hover:border-[#2B6CF5] transition-all flex items-center justify-center gap-1.5 shadow-sm" data-proc-id="${proc.id}">
                <span>Clinical Protocol</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              <button class="book-proc-btn p-2.5 rounded-full bg-[#2B6CF5]/10 hover:bg-[#2B6CF5] text-[#2B6CF5] hover:text-white border border-[#2B6CF5]/30 hover:border-transparent transition-all shadow-sm" data-proc-name="${proc.name}" title="Book this procedure">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </button>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });

      grid.querySelectorAll('.view-proc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-proc-id');
          openProcedureModal(id);
        });
      });

      grid.querySelectorAll('.book-proc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const procName = btn.getAttribute('data-proc-name');
          window.dispatchEvent(new CustomEvent('booking:prefill', { detail: { procedure: procName } }));
        });
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-[#2B6CF5]', 'text-white', 'shadow-md');
          b.classList.add('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
        });
        btn.classList.remove('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
        btn.classList.add('bg-[#2B6CF5]', 'text-white', 'shadow-md');

        const cat = btn.getAttribute('data-category');
        renderCards(cat);
      });
    });

    const openProcedureModal = (procId) => {
      const proc = doctorData.procedures.find(p => p.id === procId);
      if (!proc || !modalContent || !modal) return;

      modalContent.innerHTML = `
        <div class="flex items-start justify-between mb-6">
          <div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#D2E2FF] text-[#2B6CF5] border border-[#B1BEFB]/50 mb-2 inline-block">
              ${proc.badge} • ${proc.category.toUpperCase()}
            </span>
            <h2 class="text-2xl lg:text-3xl font-bold text-[#00000F]">${proc.name}</h2>
            <p class="text-sm text-[#2B6CF5] font-semibold mt-1">${proc.tagline}</p>
          </div>
          <div class="w-16 h-16 rounded-2xl bg-[#D2E2FF]/80 border border-[#B1BEFB] flex items-center justify-center p-3">
            <img src="assets/icons/${proc.icon}.svg" alt="${proc.name}" class="w-10 h-10 object-contain">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#DCE9FF]/50 border border-[#B1BEFB]/40 mb-6 text-[#4A4A50]">
          <div>
            <span class="text-xs text-slate-500 block">Surgical Time</span>
            <span class="text-base font-bold text-[#00000F]">${proc.duration}</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 block">Anesthesia Protocol</span>
            <span class="text-base font-bold text-[#00000F]">${proc.anesthesia}</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 block">Typical Recovery</span>
            <span class="text-base font-bold text-[#2B6CF5]">${proc.recovery}</span>
          </div>
        </div>

        <div class="mb-6">
          <h4 class="text-xs font-bold text-[#00000F] uppercase tracking-wider mb-2 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#2B6CF5]"></span> Clinical Indications &amp; Candidacy
          </h4>
          <p class="text-sm text-[#4A4A50] bg-white p-4 rounded-2xl border border-[#B1BEFB]/40 leading-relaxed shadow-sm">
            ${proc.details.indication}
          </p>
        </div>

        <div class="mb-6">
          <h4 class="text-xs font-bold text-[#00000F] uppercase tracking-wider mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#CFA3F6]"></span> Surgical Workflow &amp; Protocol
          </h4>
          <ol class="space-y-2.5">
            ${proc.details.clinicalSteps.map((step, index) => `
              <li class="flex items-start gap-3 text-sm text-[#4A4A50] bg-white p-3.5 rounded-xl border border-[#B1BEFB]/40 shadow-sm">
                <span class="w-6 h-6 rounded-full bg-[#2B6CF5] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  ${index + 1}
                </span>
                <span>${step}</span>
              </li>
            `).join('')}
          </ol>
        </div>

        <div class="mb-8">
          <h4 class="text-xs font-bold text-[#00000F] uppercase tracking-wider mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#22c55e]"></span> Primary Advantages
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${proc.details.benefits.map(b => `
              <div class="flex items-center gap-2 text-xs font-semibold text-[#00000F] bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#B1BEFB]/40">
          <button id="modal-book-this-btn" class="w-full sm:w-auto flex-1 py-3 px-6 rounded-full bg-[#2B6CF5] hover:bg-[#1f57d6] text-white font-bold text-sm shadow-lg shadow-[#2B6CF5]/30 transition-all text-center">
            Schedule Consultation for ${proc.name}
          </button>
          <button id="modal-cancel-btn" class="w-full sm:w-auto py-3 px-5 rounded-full bg-white hover:bg-slate-100 text-[#4A4A50] text-sm font-semibold border border-[#B1BEFB]/60 transition-colors">
            Close Overview
          </button>
        </div>
      `;

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');

      document.getElementById('modal-book-this-btn')?.addEventListener('click', () => {
        closeProcedureModal();
        window.dispatchEvent(new CustomEvent('booking:prefill', { detail: { procedure: proc.name } }));
      });

      document.getElementById('modal-cancel-btn')?.addEventListener('click', closeProcedureModal);
    };

    const closeProcedureModal = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProcedureModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProcedureModal();
      });
    }

    renderCards('all');
  }

  // --------------------------------------------------------------------------
  // TREATMENT QUIZ
  // --------------------------------------------------------------------------
  function initTreatmentQuiz() {
    const container = document.getElementById('quiz-widget-container');
    if (!container) return;

    let currentStep = 0;
    const answers = { objective: null, timeline: null, comfort: null };

    const renderStep = () => {
      const question = doctorData.quizQuestions[currentStep];
      if (!question) {
        renderResults();
        return;
      }

      const progressPercent = (currentStep / doctorData.quizQuestions.length) * 100;

      container.innerHTML = `
        <div class="p-6 md:p-8">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-[#2B6CF5] uppercase tracking-wider">Step ${currentStep + 1} of ${doctorData.quizQuestions.length}</span>
            <span class="text-xs text-[#4A4A50] font-mono font-semibold">${Math.round(progressPercent)}% Completed</span>
          </div>

          <div class="w-full h-2.5 bg-[#D2E2FF] rounded-full overflow-hidden mb-6">
            <div class="h-full bg-gradient-to-r from-[#2B6CF5] to-[#CFA3F6] rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-[#00000F] mb-6">${question.title}</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            ${question.options.map((opt, i) => `
              <button class="quiz-opt-btn p-4 rounded-2xl text-left bg-white hover:bg-[#D2E2FF]/40 border border-[#B1BEFB]/50 hover:border-[#2B6CF5] transition-all flex flex-col justify-between group shadow-sm" data-val="${opt.value}">
                <div class="flex items-start justify-between w-full mb-2">
                  <span class="font-bold text-[#00000F] text-sm group-hover:text-[#2B6CF5] transition-colors">${opt.label}</span>
                  <span class="w-6 h-6 rounded-full border border-[#B1BEFB] flex items-center justify-center text-xs text-[#4A4A50] group-hover:border-[#2B6CF5] group-hover:bg-[#2B6CF5] group-hover:text-white transition-all font-semibold">
                    ${String.fromCharCode(65 + i)}
                  </span>
                </div>
                <span class="text-xs text-[#4A4A50]">${opt.note}</span>
              </button>
            `).join('')}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-[#B1BEFB]/30">
            ${currentStep > 0 ? `
              <button id="quiz-prev-btn" class="text-xs font-bold text-[#4A4A50] hover:text-[#2B6CF5] transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                Previous Question
              </button>
            ` : `<div></div>`}
            <span class="text-xs text-slate-500 font-medium">Select an option to continue</span>
          </div>
        </div>
      `;

      container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.getAttribute('data-val');
          if (currentStep === 0) answers.objective = val;
          if (currentStep === 1) answers.timeline = val;
          if (currentStep === 2) answers.comfort = val;
          currentStep++;
          renderStep();
        });
      });

      document.getElementById('quiz-prev-btn')?.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          renderStep();
        }
      });
    };

    const renderResults = () => {
      let recommendedProc = "Traumatic Fracture & Incisal Edge Reconstruction";
      let estTimeline = "Single Visit (60 – 90 mins)";
      let iconName = "smile";
      let rationale = "Based on your clinical goal, our restorative team recommends biomimetic nano-hybrid reconstruction to restore natural tooth anatomy and luminescence with zero unnecessary enamel loss.";

      if (answers.objective === 'peg') {
        recommendedProc = "Peg Lateral & Diastema Veneer Closure";
        estTimeline = "2 Visits (7 Days)";
        iconName = "arch";
        rationale = "Your objective to close gaps or reshape undersized teeth is ideally addressed with micro-thin feldspathic porcelain veneers that sculpt perfect symmetry.";
      } else if (answers.objective === 'implants') {
        recommendedProc = "3D Guided Dental Implant Placement";
        estTimeline = "Same-Day Provisional Restoration";
        iconName = "implant";
        rationale = "For replacing missing teeth, 3D computer-guided implantology offers sub-millimeter precision, immediate function, and lifelong stability.";
      } else if (answers.objective === 'aesthetic') {
        recommendedProc = "Micro-Thin Feldspathic Porcelain Veneers";
        estTimeline = "2 Clinic Appointments (10 days)";
        iconName = "smile";
        rationale = "A comprehensive smile design with 3D aesthetic preview before starting, giving you a radiant, symmetrical smile.";
      }

      container.innerHTML = `
        <div class="p-6 md:p-8 text-center sm:text-left">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
              Analysis Complete
            </span>
            <button id="restart-quiz-btn" class="text-xs text-[#2B6CF5] hover:underline font-semibold">
              Retake Assessment
            </button>
          </div>

          <h3 class="text-2xl font-extrabold text-[#00000F] mb-2">Recommended Clinical Treatment Pathway</h3>
          <p class="text-sm text-[#4A4A50] mb-6">${rationale}</p>

          <div class="p-5 rounded-2xl bg-[#DCE9FF]/60 border border-[#B1BEFB] flex flex-col sm:flex-row items-center gap-5 mb-6 shadow-sm">
            <div class="w-16 h-16 rounded-2xl bg-white border border-[#B1BEFB] flex items-center justify-center p-3 flex-shrink-0 shadow-sm">
              <img src="assets/icons/${iconName}.svg" alt="Icon" class="w-10 h-10 object-contain">
            </div>
            <div class="flex-1 text-center sm:text-left">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#2B6CF5] block mb-1">Target Treatment</span>
              <h4 class="text-lg font-bold text-[#00000F]">${recommendedProc}</h4>
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-xs text-[#4A4A50]">
                <span>⏱ Expected: <strong>${estTimeline}</strong></span>
                <span>🛡 Comfort: <strong>${answers.comfort === 'iv-sedation' ? 'IV Twilight Sedation' : 'Comfort Local Anesthesia'}</strong></span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3">
            <button id="book-quiz-result-btn" class="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full bg-[#2B6CF5] hover:bg-[#1f57d6] text-white font-bold text-sm shadow-lg shadow-[#2B6CF5]/30 transition-all text-center">
              Schedule Priority Consultation for this Plan
            </button>
            <a href="#cases" class="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white hover:bg-slate-100 text-[#4A4A50] text-sm font-semibold border border-[#B1BEFB]/60 text-center transition-colors shadow-sm">
              View Similar Case Studies
            </a>
          </div>
        </div>
      `;

      document.getElementById('restart-quiz-btn')?.addEventListener('click', () => {
        currentStep = 0;
        answers.objective = null;
        answers.timeline = null;
        answers.comfort = null;
        renderStep();
      });

      document.getElementById('book-quiz-result-btn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('booking:prefill', {
          detail: {
            procedure: recommendedProc,
            timeline: answers.timeline,
            comfort: answers.comfort
          }
        }));
      });
    };

    renderStep();
  }

  // --------------------------------------------------------------------------
  // BOOKING MODAL
  // --------------------------------------------------------------------------
  function initBookingModal() {
    const modal = document.getElementById('booking-modal');
    const openButtons = document.querySelectorAll('.open-booking-modal-btn');
    const closeButton = document.getElementById('close-booking-modal');
    const form = document.getElementById('booking-form');
    const procedureSelect = document.getElementById('booking-procedure');
    const dateInput = document.getElementById('booking-date');
    const confirmationContainer = document.getElementById('booking-confirmation-container');
    const formContainer = document.getElementById('booking-form-container');

    if (!modal) return;

    if (procedureSelect) {
      procedureSelect.innerHTML = `
        <option value="" disabled selected>Select Clinical Treatment</option>
        ${doctorData.procedures.map(p => `
          <option value="${p.name}">${p.name} (${p.category})</option>
        `).join('')}
        <option value="Comprehensive Cosmetic Smile Assessment">Comprehensive Cosmetic Smile Assessment</option>
        <option value="Biomimetic Second Opinion">Biomimetic Second Opinion</option>
      `;
    }

    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    const openModal = () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');

      if (formContainer) formContainer.classList.remove('hidden');
      if (confirmationContainer) confirmationContainer.classList.add('hidden');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    };

    openButtons.forEach(btn => btn.addEventListener('click', openModal));
    if (closeButton) closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('booking:prefill', (e) => {
      const { procedure, comfort } = e.detail || {};
      openModal();

      if (procedureSelect && procedure) {
        for (let i = 0; i < procedureSelect.options.length; i++) {
          if (procedureSelect.options[i].value.toLowerCase().includes(procedure.toLowerCase()) ||
              procedure.toLowerCase().includes(procedureSelect.options[i].value.toLowerCase())) {
            procedureSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (comfort === 'iv-sedation') {
        const sedationCheckbox = document.getElementById('booking-sedation');
        if (sedationCheckbox) sedationCheckbox.checked = true;
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('booking-name')?.value;
        const phone = document.getElementById('booking-phone')?.value;
        const email = document.getElementById('booking-email')?.value;
        const procedure = procedureSelect?.value || 'Cosmetic Consultation';
        const date = dateInput?.value || new Date().toISOString().split('T')[0];
        const timeSlot = document.getElementById('booking-time')?.value || 'Morning (9:00 AM - 1:00 PM)';

        const refId = `ELRAYES-${Math.floor(100000 + Math.random() * 900000)}`;

        if (formContainer) formContainer.classList.add('hidden');
        if (confirmationContainer) {
          confirmationContainer.classList.remove('hidden');
          confirmationContainer.innerHTML = `
            <div class="text-center py-6 px-4">
              <div class="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              </div>

              <span class="text-xs font-bold px-3 py-1 rounded-full bg-[#D2E2FF] text-[#2B6CF5] border border-[#B1BEFB] mb-3 inline-block font-mono">
                CONFIRMATION #${refId}
              </span>

              <h3 class="text-2xl font-extrabold text-[#00000F] mb-2">Consultation Request Received</h3>
              <p class="text-sm text-[#4A4A50] max-w-md mx-auto mb-6">
                Thank you, <strong class="text-[#00000F]">${name}</strong>. Our clinical concierge will contact you shortly via <span class="text-[#2B6CF5] font-semibold">${phone}</span> to finalize your appointment schedule.
              </p>

              <div class="bg-[#DCE9FF]/50 border border-[#B1BEFB]/60 rounded-2xl p-4 max-w-md mx-auto text-left text-xs text-[#4A4A50] space-y-2 mb-6">
                <div class="flex justify-between border-b border-[#B1BEFB]/30 pb-2">
                  <span class="text-slate-500">Doctor:</span>
                  <span class="font-bold text-[#00000F]">${doctorData.profile.name}, ${doctorData.profile.titles}</span>
                </div>
                <div class="flex justify-between border-b border-[#B1BEFB]/30 pb-2">
                  <span class="text-slate-500">Treatment:</span>
                  <span class="font-bold text-[#2B6CF5]">${procedure}</span>
                </div>
                <div class="flex justify-between border-b border-[#B1BEFB]/30 pb-2">
                  <span class="text-slate-500">Target Date &amp; Window:</span>
                  <span class="font-bold text-[#00000F]">${date} • ${timeSlot}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-500">Location:</span>
                  <span class="font-bold text-[#00000F]">${doctorData.profile.location}</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button id="download-ics-btn" class="w-full sm:w-auto py-3 px-6 rounded-full bg-[#2B6CF5] hover:bg-[#1f57d6] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  Add to Calendar (.ICS)
                </button>
                <button id="done-booking-btn" class="w-full sm:w-auto py-3 px-6 rounded-full bg-white hover:bg-slate-100 text-[#4A4A50] text-xs font-bold border border-[#B1BEFB]/60 transition-colors shadow-sm">
                  Return to Portfolio
                </button>
              </div>
            </div>
          `;

          document.getElementById('download-ics-btn')?.addEventListener('click', () => {
            const cleanDate = date.replace(/-/g, '');
            const icsContent = [
              'BEGIN:VCALENDAR',
              'VERSION:2.0',
              'PRODID:-//Dr Saleh Elrayes Dentistry//Clinical Portfolio//EN',
              'BEGIN:VEVENT',
              'SUMMARY:Cosmetic Dental Consultation with ' + doctorData.profile.name,
              'DESCRIPTION:Consultation for ' + procedure + '. Ref #' + refId,
              'LOCATION:' + doctorData.profile.location,
              'DTSTART;VALUE=DATE:' + cleanDate,
              'DTEND;VALUE=DATE:' + cleanDate,
              'STATUS:CONFIRMED',
              'END:VEVENT',
              'END:VCALENDAR'
            ].join('\r\n');

            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute('download', 'dr_saleh_consultation.ics');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });

          document.getElementById('done-booking-btn')?.addEventListener('click', closeModal);
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // TESTIMONIALS & CREDENTIALS
  // --------------------------------------------------------------------------
  function initTestimonialsAndCredentials() {
    // Render Testimonials
    const tContainer = document.getElementById('testimonials-grid');
    if (tContainer) {
      tContainer.innerHTML = '';
      doctorData.testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'glass-panel glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between';

        const starsHtml = Array.from({ length: t.rating }).map(() => `
          <svg class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        `).join('');

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1">${starsHtml}</div>
              <span class="text-xs text-slate-400 font-mono font-medium">${t.date}</span>
            </div>
            <p class="text-sm text-[#4A4A50] italic mb-6 leading-relaxed">"${t.quote}"</p>
          </div>
          <div class="pt-4 border-t border-[#B1BEFB]/30 flex items-center justify-between">
            <div>
              <h4 class="text-sm font-bold text-[#00000F] flex items-center gap-1.5">
                ${t.patient}
                ${t.verified ? `
                  <span class="inline-flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <svg class="w-3 h-3 text-emerald-600 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                    Verified
                  </span>
                ` : ''}
              </h4>
              <span class="text-xs text-[#2B6CF5] font-semibold">${t.procedure}</span>
            </div>
            <div class="w-9 h-9 rounded-full bg-[#D2E2FF] border border-[#B1BEFB] flex items-center justify-center text-xs font-bold text-[#2B6CF5]">
              ${t.patient.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        `;
        tContainer.appendChild(card);
      });
    }

    // Credentials Tabs
    const tabBtns = document.querySelectorAll('.cred-tab-btn');
    const cContainer = document.getElementById('cred-tab-content');
    if (cContainer) {
      const renderTab = (tabName) => {
        if (tabName === 'education') {
          cContainer.innerHTML = `
            <div class="space-y-3">
              ${doctorData.credentials.education.map(item => `
                <div class="flex items-start gap-4 p-3.5 rounded-2xl bg-[#DCE9FF]/40 border border-[#B1BEFB]/40">
                  <span class="px-2.5 py-1 rounded-full bg-[#2B6CF5] text-white font-mono text-xs font-bold shadow-sm">${item.year}</span>
                  <div>
                    <h5 class="text-sm font-bold text-[#00000F]">${item.degree}</h5>
                    <p class="text-xs text-[#4A4A50] mt-0.5">${item.institution}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        } else if (tabName === 'accreditations') {
          cContainer.innerHTML = `
            <div class="space-y-2.5">
              ${doctorData.credentials.accreditations.map(acc => `
                <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#DCE9FF]/40 border border-[#B1BEFB]/40">
                  <div class="w-6 h-6 rounded-full bg-[#2B6CF5]/15 text-[#2B6CF5] flex items-center justify-center flex-shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="text-sm font-semibold text-[#00000F]">${acc}</span>
                </div>
              `).join('')}
            </div>
          `;
        } else if (tabName === 'innovations') {
          cContainer.innerHTML = `
            <div class="space-y-2.5">
              ${doctorData.credentials.innovations.map(inv => `
                <div class="flex items-start gap-3 p-3.5 rounded-2xl bg-[#DCE9FF]/40 border border-[#B1BEFB]/40">
                  <div class="w-6 h-6 rounded-full bg-[#CFA3F6]/25 text-[#7e22ce] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <span class="text-sm text-[#4A4A50] font-medium">${inv}</span>
                </div>
              `).join('')}
            </div>
          `;
        }
      };

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => {
            b.classList.remove('bg-[#2B6CF5]', 'text-white', 'shadow-md');
            b.classList.add('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
          });
          btn.classList.remove('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
          btn.classList.add('bg-[#2B6CF5]', 'text-white', 'shadow-md');
          renderTab(btn.getAttribute('data-tab'));
        });
      });

      renderTab('education');
    }
  }

  // --------------------------------------------------------------------------
  // PROFILE META INJECTION
  // --------------------------------------------------------------------------
  function injectProfileData() {
    const p = doctorData.profile;
    document.querySelectorAll('.doc-name').forEach(el => el.textContent = p.name);
    document.querySelectorAll('.doc-first-name').forEach(el => el.textContent = p.firstName);
    document.querySelectorAll('.doc-titles').forEach(el => el.textContent = p.titles);
    document.querySelectorAll('.doc-specialty').forEach(el => el.textContent = p.specialty);
    document.querySelectorAll('.doc-subspecialties').forEach(el => el.textContent = p.subspecialties);
    document.querySelectorAll('.doc-phone').forEach(el => el.textContent = p.phone);
    document.querySelectorAll('.doc-phone-link').forEach(el => el.href = 'tel:' + p.phone.replace(/[^0-9+]/g, ''));
    document.querySelectorAll('.doc-emergency').forEach(el => el.textContent = p.emergencyHotline);
    document.querySelectorAll('.doc-emergency-link').forEach(el => el.href = 'tel:' + p.emergencyHotline.replace(/[^0-9+]/g, ''));
    document.querySelectorAll('.doc-email').forEach(el => el.textContent = p.email);
    document.querySelectorAll('.doc-email-link').forEach(el => el.href = 'mailto:' + p.email);
    document.querySelectorAll('.doc-location').forEach(el => el.textContent = p.location);
    document.querySelectorAll('.doc-hours').forEach(el => el.textContent = p.consultationHours);
    document.querySelectorAll('.doc-license').forEach(el => el.textContent = p.licenseInfo);

    const bioLongEl = document.getElementById('doc-bio-long');
    if (bioLongEl) bioLongEl.textContent = p.bioLong;
  }

  function renderTechnologyCards() {
    const grid = document.getElementById('tech-grid');
    if (!grid) return;
    grid.innerHTML = '';
    doctorData.technologies.forEach(tech => {
      const card = document.createElement('div');
      card.className = 'glass-panel glass-panel-interactive rounded-3xl p-6 relative overflow-hidden group';
      card.innerHTML = `
        <div class="absolute top-0 right-0 w-24 h-24 bg-[#2B6CF5]/5 rounded-full blur-xl group-hover:bg-[#2B6CF5]/10 transition-all"></div>
        <span class="text-[11px] font-bold text-[#2B6CF5] uppercase tracking-wider block mb-1">${tech.category}</span>
        <h4 class="text-lg font-bold text-[#00000F] mb-2 group-hover:text-[#2B6CF5] transition-colors">${tech.title}</h4>
        <p class="text-xs text-[#4A4A50] mb-4 leading-relaxed">${tech.description}</p>
        <div class="flex items-center gap-2 pt-3 border-t border-[#B1BEFB]/30 text-[11px] text-[#2B6CF5] font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          <span>${tech.highlight}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // MASTER BOOTSTRAPPER (Runs immediately or on DOM ready)
  // --------------------------------------------------------------------------
  function boot() {
    injectProfileData();
    initSplash(() => {
      animateStatCounters();
    });
    window.addEventListener('portfolio:entered', () => {
      animateStatCounters();
    });
    initNav();
    initHeroCanvas();
    renderDynamicCasesFeed();
    initProcedures();
    renderTechnologyCards();
    initTreatmentQuiz();
    initTestimonialsAndCredentials();
    initBookingModal();

    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
