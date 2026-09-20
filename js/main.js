/**
 * APPLICATION ENTRY POINT (ES6 MODULAR ORCHESTRATOR)
 * Coordinates all clinical portfolio modules for Dr. Saleh Elrayes.
 * Features Dynamic Cloud-Synced Case Studies and Multi-Photo Lightbox Gallery.
 */

import { doctorData } from './doctor-data.js';
import { initSplash } from './splash.js';
import { initNav } from './nav.js';
import { initHeroCanvas, animateStatCounters } from './hero-canvas.js';
import { initProcedures } from './procedures.js';
import { initTreatmentQuiz } from './treatment-quiz.js';
import { initBookingModal } from './booking-modal.js';
import { initTestimonialsAndCredentials } from './testimonials.js';
import { fetchSupabaseCases, normalizeCaseImages } from './supabase-config.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("%c✦ Dr. Saleh Elrayes Dental Clinic Portfolio Initialized ✦", "color: #2B6CF5; font-weight: bold; font-size: 13px;");

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
});

function injectProfileData() {
  const p = doctorData.profile;

  document.querySelectorAll('.doc-name').forEach(el => el.textContent = p.name);
  document.querySelectorAll('.doc-first-name').forEach(el => el.textContent = p.firstName);
  document.querySelectorAll('.doc-titles').forEach(el => el.textContent = p.titles);
  document.querySelectorAll('.doc-specialty').forEach(el => el.textContent = p.specialty);
  document.querySelectorAll('.doc-subspecialties').forEach(el => el.textContent = p.subspecialties);
  document.querySelectorAll('.doc-phone').forEach(el => el.textContent = p.phone);
  document.querySelectorAll('.doc-phone-link').forEach(el => el.href = `tel:${p.phone.replace(/[^0-9+]/g, '')}`);
  document.querySelectorAll('.doc-emergency').forEach(el => el.textContent = p.emergencyHotline);
  document.querySelectorAll('.doc-emergency-link').forEach(el => el.href = `tel:${p.emergencyHotline.replace(/[^0-9+]/g, '')}`);
  document.querySelectorAll('.doc-email').forEach(el => el.textContent = p.email);
  document.querySelectorAll('.doc-email-link').forEach(el => el.href = `mailto:${p.email}`);
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

// ----------------------------------------------------------------------------
// DYNAMIC CLINICAL CASE FEED & LIGHTBOX
// ----------------------------------------------------------------------------
let currentGalleryCase = null;
let currentGalleryIndex = 0;

async function renderDynamicCasesFeed() {
  const container = document.getElementById('cases-feed-grid');
  if (!container) return;

  const cases = await fetchSupabaseCases();
  container.innerHTML = '';

  cases.forEach((item, index) => {
    const photos = normalizeCaseImages(item.images || item.image || item.image_url, item.cover_image);
    const coverPhoto = photos[0] || 'assets/images/doctor_case_fracture.jpg';
    const count = photos.length;
    const tagsList = Array.isArray(item.tags) ? item.tags : (item.tags ? String(item.tags).split(',').map(s => s.trim()) : []);

    const article = document.createElement('article');
    article.className = 'bg-white rounded-3xl border border-[#B1BEFB]/60 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between';

    article.innerHTML = `
      <div>
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
          <button class="text-slate-400 hover:text-[#00000F] font-bold text-lg px-1 cursor-pointer open-gallery-btn" data-case-index="${index}" aria-label="Open gallery">
            •••
          </button>
        </div>

        <div class="relative bg-slate-950 cursor-pointer group overflow-hidden open-gallery-btn" data-case-index="${index}">
          <img src="${coverPhoto}" alt="${item.title}" class="w-full h-auto object-cover max-h-[360px] group-hover:scale-102 transition-transform duration-300">
          
          <span class="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow">
            ${item.tooth_location || 'CLINICAL CASE'}
          </span>

          ${count > 1 ? `
            <span class="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow flex items-center gap-1.5">
              <svg class="w-3 h-3 text-[#B1BEFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>${count} Photos</span>
            </span>
          ` : ''}

          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span class="px-4 py-2 rounded-full bg-white/90 text-[#00000F] font-bold text-xs shadow-lg backdrop-blur-md flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#2B6CF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>View Full Gallery</span>
            </span>
          </div>
        </div>

        <div class="p-4 pb-2">
          <div class="flex items-center justify-between mb-2.5">
            <div class="flex items-center gap-4 text-[#00000F]">
              <button class="like-btn hover:text-rose-500 transition-colors" aria-label="Like post">
                <svg class="w-6 h-6 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </button>
              <button class="open-gallery-btn hover:text-[#2B6CF5] transition-colors" data-case-index="${index}" aria-label="Comment">
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

  // Feature CTA Card
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

  // Like button handling
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

  // Gallery opening
  container.querySelectorAll('.open-gallery-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const caseIdx = parseInt(el.getAttribute('data-case-index'));
      if (!isNaN(caseIdx) && cases[caseIdx]) {
        openLightboxModal(cases[caseIdx], 0);
      }
    });
  });

  // Re-bind booking triggers
  document.querySelectorAll('.open-booking-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('booking-modal');
      if (modal) modal.classList.remove('hidden');
    });
  });
}

function openLightboxModal(caseItem, startIndex = 0) {
  const lightboxModal = document.getElementById('lightbox-modal');
  if (!lightboxModal || !caseItem) return;

  currentGalleryCase = caseItem;
  currentGalleryCase._parsedPhotos = normalizeCaseImages(caseItem.images || caseItem.image || caseItem.image_url, caseItem.cover_image);
  currentGalleryIndex = Math.max(0, Math.min(startIndex, currentGalleryCase._parsedPhotos.length - 1));

  document.getElementById('lightbox-category').textContent = caseItem.category || 'Restorative';
  document.getElementById('lightbox-date').textContent = caseItem.treatment_date || 'Recent Clinical Case';
  document.getElementById('lightbox-title').textContent = caseItem.title || 'Clinical Outcome';
  document.getElementById('lightbox-tooth').textContent = caseItem.tooth_location || 'Maxillary Anterior';
  document.getElementById('lightbox-diagnosis').textContent = caseItem.diagnosis || 'Restorative Protocol';
  document.getElementById('lightbox-narrative').textContent = caseItem.clinical_narrative || caseItem.preOpDesc || '';

  const hlContainer = document.getElementById('lightbox-highlights-container');
  const hlBox = document.getElementById('lightbox-highlights');
  const rawHL = caseItem.highlights || caseItem.clinicalNotes || '';
  if (rawHL && hlBox) {
    hlContainer?.classList.remove('hidden');
    const items = rawHL.split(';').map(s => s.trim()).filter(Boolean);
    hlBox.innerHTML = items.map(it => `
      <div class="flex items-start gap-1.5">
        <span class="text-[#2B6CF5] font-bold">✓</span>
        <span>${it}</span>
      </div>
    `).join('');
  } else if (hlContainer) {
    hlContainer.classList.add('hidden');
  }

  const tagsBox = document.getElementById('lightbox-tags');
  if (tagsBox) {
    const tags = Array.isArray(caseItem.tags) ? caseItem.tags : (caseItem.tags ? String(caseItem.tags).split(',').map(s => s.trim()) : []);
    tagsBox.innerHTML = tags.map(t => `
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
  const lightboxModal = document.getElementById('lightbox-modal');
  if (!lightboxModal) return;
  lightboxModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function renderActiveGalleryPhoto() {
  if (!currentGalleryCase || !currentGalleryCase._parsedPhotos) return;

  const photos = currentGalleryCase._parsedPhotos;
  const total = photos.length;
  const img = document.getElementById('lightbox-main-img');
  const pill = document.getElementById('lightbox-counter-pill');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const strip = document.getElementById('lightbox-thumbnails-strip');

  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = photos[currentGalleryIndex];
      img.style.opacity = '1';
    }, 80);
  }

  if (pill) pill.textContent = `Photo ${currentGalleryIndex + 1} of ${total}`;

  if (total <= 1) {
    prevBtn?.classList.add('hidden');
    nextBtn?.classList.add('hidden');
    strip?.classList.add('hidden');
  } else {
    prevBtn?.classList.remove('hidden');
    nextBtn?.classList.remove('hidden');
    if (strip) {
      strip.classList.remove('hidden');
      strip.innerHTML = '';
      photos.forEach((url, i) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.className = `w-12 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
          i === currentGalleryIndex ? 'border-[#2B6CF5] scale-105 shadow-md' : 'border-white/30 opacity-60 hover:opacity-100'
        }`;
        thumbBtn.innerHTML = `<img src="${url}" alt="Thumb ${i + 1}" class="w-full h-full object-cover">`;
        thumbBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          currentGalleryIndex = i;
          renderActiveGalleryPhoto();
        });
        strip.appendChild(thumbBtn);
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

document.getElementById('close-lightbox-btn')?.addEventListener('click', closeLightboxModal);
document.getElementById('lightbox-prev-btn')?.addEventListener('click', (e) => { e.stopPropagation(); stepGallery(-1); });
document.getElementById('lightbox-next-btn')?.addEventListener('click', (e) => { e.stopPropagation(); stepGallery(1); });
document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox-modal')) closeLightboxModal();
});

window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (modal && !modal.classList.contains('hidden')) {
    if (e.key === 'ArrowLeft') stepGallery(-1);
    else if (e.key === 'ArrowRight') stepGallery(1);
    else if (e.key === 'Escape') closeLightboxModal();
  }
});
