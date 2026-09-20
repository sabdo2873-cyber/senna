/**
 * APPLICATION ENTRY POINT (ES6 MODULAR ORCHESTRATOR)
 * Coordinates all clinical portfolio modules for Dr. Saleh Elrayes.
 */

import { doctorData } from './doctor-data.js';
import { initSplash } from './splash.js';
import { initNav } from './nav.js';
import { initHeroCanvas, animateStatCounters } from './hero-canvas.js';
import { initComparisonSlider } from './comparison-slider.js';
import { initProcedures } from './procedures.js';
import { initTreatmentQuiz } from './treatment-quiz.js';
import { initBookingModal } from './booking-modal.js';
import { initTestimonialsAndCredentials } from './testimonials.js';

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
  initComparisonSlider();
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
