/**
 * FULL-SCREEN LOGO SPLASH INTRO MODULE
 * Pulsing glowing ring logo, custom specialist title, progress loader,
 * and intuitive exit triggers (click, scroll, keypress, or skip).
 */

export function initSplash(onComplete) {
  const splash = document.getElementById('splash-screen');
  const progressBar = document.getElementById('splash-progress-bar');
  const progressPercent = document.getElementById('splash-progress-percent');
  const statusText = document.getElementById('splash-status-text');
  const enterBtn = document.getElementById('splash-enter-btn');
  const skipBtn = document.getElementById('splash-skip-btn');

  if (!splash) return;

  let progress = 0;
  let isExited = false;
  let animationFrameId;

  // Realistic progressive loading sequence
  const updateProgress = () => {
    if (isExited) return;

    if (progress < 100) {
      // Non-linear realistic progress increments
      const increment = progress < 40 ? 2.5 : progress < 75 ? 1.8 : 1.2;
      progress = Math.min(100, Math.round(progress + increment));

      if (progressBar) progressBar.style.width = `${progress}%`;
      if (progressPercent) progressPercent.textContent = `${progress}%`;

      if (progress === 100) {
        if (statusText) {
          statusText.textContent = "Clinical Suite Ready";
          statusText.classList.add('text-sky-400');
        }
        if (enterBtn) {
          enterBtn.classList.remove('opacity-0', 'pointer-events-none');
          enterBtn.classList.add('opacity-100');
        }
      } else {
        animationFrameId = setTimeout(updateProgress, 25);
      }
    }
  };

  const exitSplash = () => {
    if (isExited) return;
    isExited = true;
    clearTimeout(animationFrameId);

    // Smooth exit transition
    splash.classList.add('splash-hidden');
    document.body.classList.remove('overflow-hidden');

    setTimeout(() => {
      splash.style.display = 'none';
      if (typeof onComplete === 'function') {
        onComplete();
      }
      // Dispatch custom event for hero/animations
      window.dispatchEvent(new CustomEvent('portfolio:entered'));
    }, 850);
  };

  // Prevent background scroll while splash is active
  document.body.classList.add('overflow-hidden');

  // Trigger loading progression
  setTimeout(updateProgress, 120);

  // Interaction handlers
  if (enterBtn) {
    enterBtn.addEventListener('click', exitSplash);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', exitSplash);
  }

  // Scroll or keypress to enter
  const handleWheel = (e) => {
    if (e.deltaY > 15 || e.deltaY < -15) {
      exitSplash();
      window.removeEventListener('wheel', handleWheel);
    }
  };
  window.addEventListener('wheel', handleWheel, { passive: true });

  // Touch swipe to enter
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (Math.abs(touchStartY - touchEndY) > 30) {
      exitSplash();
    }
  }, { passive: true });

  // Keyboard shortcut (Space, Enter, Down Arrow)
  window.addEventListener('keydown', (e) => {
    if (['Space', 'Enter', 'ArrowDown', 'PageDown'].includes(e.code)) {
      exitSplash();
    }
  });

  return { exitSplash };
}
