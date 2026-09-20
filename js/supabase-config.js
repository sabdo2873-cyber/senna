/**
 * SUPABASE CONFIGURATION & DYNAMIC CLINICAL CASE SERVICE
 * Zero-maintenance, direct cloud synchronization with localStorage fallback.
 * Uses @supabase/supabase-js CDN.
 */

// Public Supabase Project Credentials
// (Can be overridden via window.SUPABASE_URL and window.SUPABASE_ANON_KEY or localStorage)
const DEFAULT_SUPABASE_URL = "https://xyzcompanyplaceholder.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder";

export const SUPABASE_URL = localStorage.getItem('custom_supabase_url') || window.SUPABASE_URL || DEFAULT_SUPABASE_URL;
export const SUPABASE_ANON_KEY = localStorage.getItem('custom_supabase_key') || window.SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

let supabaseClient = null;

// Initialize Supabase client if SDK is loaded
if (window.supabase && typeof window.supabase.createClient === 'function') {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (err) {
    console.warn("Supabase init failed, fallback to local store:", err);
  }
}

export function getSupabaseClient() {
  if (!supabaseClient && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
      console.warn("Could not create Supabase client:", e);
    }
  }
  return supabaseClient;
}

/**
 * Normalizes case photo representation from flexible schema text column:
 * Supports:
 * - JSON array string: '["https://...", "https://..."]'
 * - Single URL string: 'https://...' or 'assets/images/...'
 * - Native array: ['url1', 'url2']
 * - Comma-separated strings or fallback placeholder
 */
export function normalizeCaseImages(rawImages, fallbackSingle = '') {
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
      } catch (e) {
        // Fallback to comma separation
      }
    }
    if (trimmed.includes(',')) {
      const split = trimmed.split(',').map(s => s.trim()).filter(Boolean);
      if (split.length > 0) return split;
    }
    if (trimmed.length > 0) {
      return [trimmed];
    }
  }

  if (fallbackSingle && typeof fallbackSingle === 'string' && fallbackSingle.trim().length > 0) {
    return [fallbackSingle.trim()];
  }

  return ['assets/images/doctor_case_fracture.jpg'];
}

/**
 * Local Storage persistent fallback store for cases
 */
const LOCAL_STORAGE_KEY = 'dr_saleh_clinical_cases_v1';

export function getLocalCases() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error("Failed to read local cases:", e);
  }
  return getDefaultSeedCases();
}

export function saveLocalCases(cases) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cases));
  } catch (e) {
    console.error("Failed to save local cases:", e);
  }
}

/**
 * Default Seed Cases matching Dr. Saleh's real clinical photographs
 */
export function getDefaultSeedCases() {
  return [
    {
      id: "case-seed-1",
      title: "Traumatic Incisor Fracture Reconstruction",
      category: "Restorative",
      tooth_location: "Maxillary Centrals (#8, #9)",
      diagnosis: "Complicated Enamel & Dentin Fracture with Incisal Third Loss",
      treatment_date: "2026-03-12",
      clinical_narrative: "Patient presented following acute sports impact trauma. Performed polychromatic nano-hybrid composite stratification with multi-layered anatomical mamelons, star-bevel margins, and high-gloss diamond polish in a single 75-minute visit.",
      highlights: "Single-visit biomimetic restoration; Zero pulp compromise; Natural light transmission translucency",
      tags: ["TraumaDentistry", "BiomimeticDentistry", "IncisalFracture", "Restorative"],
      images: [
        "assets/images/doctor_case_fracture.jpg",
        "assets/images/case_fracture_before.jpg",
        "assets/images/case_fracture_after.jpg"
      ],
      created_at: new Date(Date.now() - 2 * 86400000).toISOString()
    },
    {
      id: "case-seed-2",
      title: "Laser Gingival Recontouring & Crown Lengthening",
      category: "Aesthetics",
      tooth_location: "Anterior Sextant (#6 - #11)",
      diagnosis: "Excessive Gingival Display ('Gummy Smile') & Asymmetrical Zeniths",
      treatment_date: "2026-03-05",
      clinical_narrative: "High-precision all-tissue Waterlase laser gingivectomy revealing natural anatomical crown proportions. Instant coagulation achieved with zero scalpels, zero sutures, and painless 48-hour recovery.",
      highlights: "Painless Waterlase protocol; Instant hemostasis without sutures; 48-hour tissue recovery",
      tags: ["LaserDentistry", "GummySmile", "CrownLengthening", "PeriodontalAesthetics"],
      images: [
        "assets/images/case_gingivectomy_lengthening.jpg"
      ],
      created_at: new Date(Date.now() - 5 * 86400000).toISOString()
    },
    {
      id: "case-seed-3",
      title: "Congenital Peg Lateral & Diastema Veneer Closure",
      category: "Restorative",
      tooth_location: "Maxillary Laterals (#7, #10)",
      diagnosis: "Bilateral Microdontia / Peg Laterals with Prominent Anterior Spacing",
      treatment_date: "2026-02-28",
      clinical_narrative: "Fabricated non-prep micro-thin feldspathic porcelain veneers preserving over 95% of healthy enamel. Sculpted custom cervical emergence profile to generate natural interdental pink papilla fill.",
      highlights: "95%+ healthy enamel preserved; Custom cervical emergence profile; Ideal papilla fill",
      tags: ["PegLateral", "DiastemaClosure", "PorcelainVeneers", "Microdontia"],
      images: [
        "assets/images/doctor_case_peg_lateral.jpg",
        "assets/images/case_peg_before.jpg",
        "assets/images/case_peg_after.jpg"
      ],
      created_at: new Date(Date.now() - 8 * 86400000).toISOString()
    },
    {
      id: "case-seed-4",
      title: "Multidisciplinary Endodontics & Anterior Smile Rehabilitation",
      category: "Endodontics",
      tooth_location: "Maxillary Anterior Quad (#6 - #9)",
      diagnosis: "Chronic Apical Periodontitis & Severe Aesthetic Compromise",
      treatment_date: "2026-02-14",
      clinical_narrative: "High-complexity rehabilitation combining Digital Smile Design facial grid analysis, microscopic endodontic sealing under rubber dam isolation, and definitive aesthetic ceramic crowns creating full smile symmetry.",
      highlights: "Microscopic endodontic sealing; Digital Smile Design facial grid; Rubber dam isolation",
      tags: ["Endodontics", "DigitalSmileDesign", "RubberDam", "Multidisciplinary"],
      images: [
        "assets/images/case_multistep_restoration.jpg"
      ],
      created_at: new Date(Date.now() - 14 * 86400000).toISOString()
    },
    {
      id: "case-seed-5",
      title: "Posterior Biomimetic Composite & Cusp Sculpting",
      category: "Restorative",
      tooth_location: "Mandibular First Molar (#19)",
      diagnosis: "Deep Dentin Caries with Undermined Cuspal Architecture",
      treatment_date: "2026-01-20",
      clinical_narrative: "Atraumatic excavation under strict rubber dam isolation (clamp #26), Immediate Dentin Sealing (IDS), and biomimetic composite layering replicating natural fissure anatomy, contact points, and biological biting biomechanics.",
      highlights: "Immediate Dentin Sealing (IDS); Strict rubber dam isolation; Natural fissure anatomy restoration",
      tags: ["BiomimeticDentistry", "RubberDam", "PosteriorComposite", "CariesRemoval"],
      images: [
        "assets/images/case_posterior_biomimetic.jpg"
      ],
      created_at: new Date(Date.now() - 21 * 86400000).toISOString()
    }
  ];
}

/**
 * CRUD HELPERS
 */

// 1. Fetch all cases (Supabase cloud first, localStorage fallback)
export async function fetchSupabaseCases() {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('clinical_cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        // Map and normalize images
        const formatted = data.map(item => ({
          ...item,
          images: normalizeCaseImages(item.images || item.image_url || item.image, item.cover_image),
          tags: Array.isArray(item.tags) 
            ? item.tags 
            : (typeof item.tags === 'string' ? item.tags.split(',').map(t => t.trim()).filter(Boolean) : [])
        }));
        saveLocalCases(formatted);
        return formatted;
      }
    } catch (err) {
      console.warn("Supabase query error, reverting to local cases:", err);
    }
  }
  
  // Return local cases
  return getLocalCases();
}

// 2. Create case
export async function createSupabaseCase(caseObj) {
  const newCase = {
    id: caseObj.id || 'case-' + Date.now(),
    title: caseObj.title || 'Untitled Clinical Case',
    category: caseObj.category || 'Restorative',
    tooth_location: caseObj.tooth_location || 'Not Specified',
    diagnosis: caseObj.diagnosis || '',
    treatment_date: caseObj.treatment_date || new Date().toISOString().split('T')[0],
    clinical_narrative: caseObj.clinical_narrative || '',
    highlights: caseObj.highlights || '',
    tags: Array.isArray(caseObj.tags) ? caseObj.tags : (caseObj.tags ? caseObj.tags.split(',').map(s => s.trim()) : []),
    images: Array.isArray(caseObj.images) ? caseObj.images : [caseObj.images || 'assets/images/doctor_case_fracture.jpg'],
    created_at: new Date().toISOString()
  };

  // 1. Save locally
  const current = getLocalCases();
  const updated = [newCase, ...current.filter(c => c.id !== newCase.id)];
  saveLocalCases(updated);

  // 2. Cloud sync if Supabase is connected
  const client = getSupabaseClient();
  if (client) {
    try {
      const payload = {
        id: newCase.id,
        title: newCase.title,
        category: newCase.category,
        tooth_location: newCase.tooth_location,
        diagnosis: newCase.diagnosis,
        treatment_date: newCase.treatment_date,
        clinical_narrative: newCase.clinical_narrative,
        highlights: newCase.highlights,
        tags: newCase.tags,
        // Store images flexibly as JSON string or array to be backwards compatible
        images: JSON.stringify(newCase.images),
        image: newCase.images[0] || '',
        created_at: newCase.created_at
      };
      await client.from('clinical_cases').upsert([payload]);
    } catch (e) {
      console.warn("Supabase upsert warning:", e);
    }
  }

  return newCase;
}

// 3. Update case
export async function updateSupabaseCase(id, updateFields) {
  const current = getLocalCases();
  let updatedCase = null;
  const nextList = current.map(c => {
    if (c.id === id) {
      updatedCase = { ...c, ...updateFields };
      return updatedCase;
    }
    return c;
  });

  if (updatedCase) {
    saveLocalCases(nextList);
    const client = getSupabaseClient();
    if (client) {
      try {
        const payload = {
          ...updateFields,
          images: updateFields.images ? JSON.stringify(updateFields.images) : undefined,
          image: updateFields.images && updateFields.images[0] ? updateFields.images[0] : undefined
        };
        await client.from('clinical_cases').update(payload).eq('id', id);
      } catch (e) {
        console.warn("Supabase update error:", e);
      }
    }
  }
  return updatedCase;
}

// 4. Delete case
export async function deleteSupabaseCase(id) {
  const current = getLocalCases();
  const filtered = current.filter(c => c.id !== id);
  saveLocalCases(filtered);

  const client = getSupabaseClient();
  if (client) {
    try {
      await client.from('clinical_cases').delete().eq('id', id);
    } catch (e) {
      console.warn("Supabase delete error:", e);
    }
  }
  return true;
}

// 5. Seed defaults into database/localStorage
export async function seedDefaultCases() {
  const seeds = getDefaultSeedCases();
  saveLocalCases(seeds);

  const client = getSupabaseClient();
  if (client) {
    try {
      const records = seeds.map(s => ({
        id: s.id,
        title: s.title,
        category: s.category,
        tooth_location: s.tooth_location,
        diagnosis: s.diagnosis,
        treatment_date: s.treatment_date,
        clinical_narrative: s.clinical_narrative,
        highlights: s.highlights,
        tags: s.tags,
        images: JSON.stringify(s.images),
        image: s.images[0] || '',
        created_at: s.created_at
      }));
      await client.from('clinical_cases').upsert(records);
    } catch (e) {
      console.warn("Seed error on Supabase:", e);
    }
  }
  return seeds;
}
