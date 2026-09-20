/**
 * INTERACTIVE "BEFORE & AFTER" CLINICAL CASE STUDIES SLIDER
 * Features Dr. Saleh Elrayes' real clinical examples:
 * Case 1: Traumatic Incisor Fracture Repair
 * Case 2: Peg Lateral & Diastema Ceramic Veneer
 * Case 3: Full-Arch All-on-6 Rehabilitation
 */

import { doctorData } from './doctor-data.js';

export function initComparisonSlider() {
  const container = document.getElementById('comparison-box');
  const overlay = document.getElementById('comparison-overlay');
  const handle = document.getElementById('comparison-handle');
  const beforeImg = document.getElementById('comparison-before-img');
  const afterImg = document.getElementById('comparison-after-img');
  const caseButtons = document.querySelectorAll('.case-tab-btn');

  const caseTitle = document.getElementById('case-title');
  const casePatient = document.getElementById('case-patient');
  const casePreOp = document.getElementById('case-pre-op');
  const casePostOp = document.getElementById('case-post-op');
  const caseNotes = document.getElementById('case-notes');
  const caseTime = document.getElementById('case-time');

  if (!container || !overlay || !handle) return;

  let isDragging = false;

  const setSliderPosition = (percent) => {
    const clamped = Math.max(2, Math.min(98, percent));
    overlay.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
  };

  const getPositionFromEvent = (e) => {
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    return (offsetX / rect.width) * 100;
  };

  const startDrag = (e) => {
    isDragging = true;
    container.classList.add('cursor-ew-resize');
    setSliderPosition(getPositionFromEvent(e));
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setSliderPosition(getPositionFromEvent(e));
  };

  const stopDrag = () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('cursor-ew-resize');
    }
  };

  container.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', stopDrag);

  container.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', onDrag, { passive: false });
  window.addEventListener('touchend', stopDrag);

  handle.setAttribute('tabindex', '0');
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-label', 'Pre-Op and Post-Op image comparison slider');
  handle.setAttribute('aria-valuenow', '50');

  handle.addEventListener('keydown', (e) => {
    const currentVal = parseFloat(overlay.style.width) || 50;
    if (e.key === 'ArrowLeft') {
      setSliderPosition(currentVal - 5);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(currentVal + 5);
      e.preventDefault();
    }
  });

  const switchCase = (index) => {
    const caseData = doctorData.caseStudies[index];
    if (!caseData) return;

    caseButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('bg-[#2B6CF5]', 'text-white', 'shadow-md', 'border-transparent');
        btn.classList.remove('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
      } else {
        btn.classList.remove('bg-[#2B6CF5]', 'text-white', 'shadow-md', 'border-transparent');
        btn.classList.add('bg-white', 'text-[#4A4A50]', 'border-[#B1BEFB]/50');
      }
    });

    container.style.opacity = '0.4';
    container.style.transition = 'opacity 0.2s ease';

    setTimeout(() => {
      if (beforeImg) beforeImg.src = caseData.beforeImg;
      if (afterImg) afterImg.src = caseData.afterImg;

      setSliderPosition(50);

      if (caseTitle) caseTitle.textContent = caseData.title;
      if (casePatient) casePatient.textContent = caseData.patient;
      if (casePreOp) casePreOp.textContent = caseData.preOpDesc;
      if (casePostOp) casePostOp.textContent = caseData.postOpDesc;
      if (caseNotes) caseNotes.textContent = caseData.clinicalNotes;
      if (caseTime) caseTime.textContent = caseData.treatmentTime;

      container.style.opacity = '1';
    }, 120);
  };

  caseButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => switchCase(idx));
  });

  setSliderPosition(50);
  switchCase(0);
}
