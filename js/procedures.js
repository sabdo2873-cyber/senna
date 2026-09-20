/**
 * CLINICAL PROCEDURES MATRIX & DETAIL MODAL
 * Light medical aesthetic with periwinkle glassmorphism and royal blue badges.
 */

import { doctorData } from './doctor-data.js';

export function initProcedures() {
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
          <!-- Header with Icon and Badge -->
          <div class="flex items-start justify-between mb-5">
            <div class="w-14 h-14 rounded-2xl bg-[#D2E2FF]/60 border border-[#B1BEFB]/60 flex items-center justify-center p-3 shadow-sm group-hover:border-[#2B6CF5]/50 transition-colors">
              <img src="assets/icons/${proc.icon}.svg" alt="${proc.name} icon" class="w-8 h-8 object-contain">
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#D2E2FF] text-[#2B6CF5] border border-[#B1BEFB]/50">
              ${proc.badge}
            </span>
          </div>

          <!-- Title & Tagline -->
          <h3 class="text-xl font-bold text-[#00000F] mb-2 group-hover:text-[#2B6CF5] transition-colors">${proc.name}</h3>
          <p class="text-xs text-[#2B6CF5] font-semibold mb-3">${proc.tagline}</p>
          <p class="text-sm text-[#4A4A50] mb-6 leading-relaxed">${proc.summary}</p>
        </div>

        <!-- Meta specs & action -->
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
