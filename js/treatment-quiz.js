/**
 * INTERACTIVE TREATMENT ESTIMATOR & SMILE QUIZ
 * Light medical palette with direct procedure recommendations.
 */

import { doctorData } from './doctor-data.js';

export function initTreatmentQuiz() {
  const container = document.getElementById('quiz-widget-container');
  if (!container) return;

  let currentStep = 0;
  const answers = {
    objective: null,
    timeline: null,
    comfort: null
  };

  const renderStep = () => {
    const question = doctorData.quizQuestions[currentStep];

    if (!question) {
      renderResults();
      return;
    }

    const progressPercent = ((currentStep) / doctorData.quizQuestions.length) * 100;

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
