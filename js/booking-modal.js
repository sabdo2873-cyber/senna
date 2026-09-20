/**
 * CONSULTATION BOOKING MODAL & APPOINTMENT SCHEDULER
 * Light medical palette with field validation and .ICS calendar file download.
 */

import { doctorData } from './doctor-data.js';

export function initBookingModal() {
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
          generateIcsFile({
            title: `Cosmetic Dental Consultation with ${doctorData.profile.name}`,
            description: `Consultation for ${procedure}. Ref #${refId}. Location: ${doctorData.profile.location}`,
            location: doctorData.profile.location,
            date: date
          });
        });

        document.getElementById('done-booking-btn')?.addEventListener('click', closeModal);
      }
    });
  }
}

function generateIcsFile({ title, description, location, date }) {
  const cleanDate = date.replace(/-/g, '');
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dr Saleh Elrayes Dentistry//Clinical Portfolio//EN',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART;VALUE=DATE:${cleanDate}`,
    `DTEND;VALUE=DATE:${cleanDate}`,
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
}
