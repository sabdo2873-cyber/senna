/**
 * TESTIMONIALS & CREDENTIALS MODULE
 * Light medical aesthetic with periwinkle and royal blue cards.
 */

import { doctorData } from './doctor-data.js';

export function initTestimonialsAndCredentials() {
  renderTestimonials();
  initCredentialTabs();
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = '';

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
              <span class="inline-flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200" title="Verified Patient">
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

    container.appendChild(card);
  });
}

function initCredentialTabs() {
  const tabBtns = document.querySelectorAll('.cred-tab-btn');
  const contentContainer = document.getElementById('cred-tab-content');
  if (!contentContainer) return;

  const renderTab = (tabName) => {
    if (tabName === 'education') {
      contentContainer.innerHTML = `
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
      contentContainer.innerHTML = `
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
      contentContainer.innerHTML = `
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

      const target = btn.getAttribute('data-tab');
      renderTab(target);
    });
  });

  renderTab('education');
}
