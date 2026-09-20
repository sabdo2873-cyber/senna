/**
 * CLINICAL DATA STORE & DOCTOR PROFILE CONFIGURATION
 * Updated with Dr. Saleh Elrayes' profile, custom color palette,
 * and verified clinical case studies (anterior fracture & peg lateral veneer).
 */

export const doctorData = {
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

  colors: {
    primary: "#2B6CF5",
    lavender: "#CFA3F6",
    dark: "#00000F",
    periwinkle: "#B1BEFB",
    ice: "#D2E2FF",
    muted: "#4A4A50",
    bgLight: "#DCE9FF",
    bgPage: "#F3F7FF"
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
  ],

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
      quote: "I broke my front teeth in an accident and thought my smile was ruined forever. Dr. Saleh restored both teeth in a single visit with such perfection that not even my family can tell they were ever chipped. He is an true artist!"
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
