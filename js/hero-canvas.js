/**
 * HERO CANVAS & STAT COUNTER ANIMATIONS
 * Soft luminous periwinkle and royal blue ambient particle constellation
 * matching the light medical aesthetic.
 */

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let particles = [];
  let width = 0;
  let height = 0;
  let isVisible = true;

  const resize = () => {
    width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.parentElement.offsetHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
  };

  const initParticles = () => {
    particles = [];
    const count = Math.min(36, Math.floor((width * height) / 26000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.5 ? 'rgba(43, 108, 245, ' : 'rgba(207, 163, 246, ',
        alpha: Math.random() * 0.35 + 0.15
      });
    }
  };

  const draw = () => {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const edgeAlpha = (1 - dist / 140) * 0.16;
          ctx.strokeStyle = `rgba(177, 190, 251, ${edgeAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(draw);
  };

  const heroSection = document.getElementById('hero');
  if (heroSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationId);
        draw();
      }
    }, { threshold: 0.1 });
    observer.observe(heroSection);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

/**
 * Animated number counter for hero statistics
 */
export function animateStatCounters() {
  const statElements = document.querySelectorAll('[data-counter-target]');
  if (!statElements.length) return;

  statElements.forEach(el => {
    const targetStr = el.getAttribute('data-counter-target');
    const isFloat = targetStr.includes('.');
    const targetNum = parseFloat(targetStr);
    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * targetNum;

      el.textContent = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = isFloat ? targetNum.toFixed(1) : targetNum;
      }
    };

    requestAnimationFrame(updateCounter);
  });
}
