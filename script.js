function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("hamburger-open-icon");
  const closeIcon = document.getElementById("hamburger-close-icon");

  const isOpen = !menu.classList.contains("hidden");

  if (isOpen) {
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
}

function updateThemeControls() {
  const isLight = document.documentElement.classList.contains('light-theme');
  const icon = isLight ? 'fa-moon' : 'fa-sun';
  const label = isLight ? 'Dark mode' : 'Light mode';

  ['theme-toggle', 'mobile-theme-toggle'].forEach(id => {
    const button = document.getElementById(id);
    if (!button) return;
    button.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
    const iconElement = button.querySelector('i');
    if (iconElement) iconElement.className = `fa-solid ${icon}`;
    const labelElement = button.querySelector('span');
    if (labelElement) labelElement.textContent = label;
  });
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeControls();
}

updateThemeControls();

function downloadResume() {
  fetch('./assets/Megha_Murukesh_Resume.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Megha_Murukesh_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('Error downloading the file:', error);
      window.open('./assets/Megha_Murukesh_Resume.pdf', '_blank');
    });
}

function setupProjectsToggle() {
  const projects = Array.from(document.querySelectorAll('.projects-showcase > .group'));
  const toggleWrap = document.getElementById('projects-toggle-wrap');
  const toggle = document.getElementById('projects-toggle');
  if (!toggleWrap || !toggle || !projects.length) return;

  let expanded = false;
  const render = () => {
    const hasExtraProjects = projects.length > 3;
    const visibleCount = hasExtraProjects ? (window.innerWidth < 768 ? 2 : 3) : projects.length;

    projects.forEach((project, index) => {
      project.classList.toggle('hidden', !expanded && index >= visibleCount);
    });

    toggleWrap.classList.toggle('hidden', !hasExtraProjects);
    if (hasExtraProjects) {
      const hiddenCount = projects.length - visibleCount;
      toggle.innerHTML = expanded
        ? 'Show fewer projects <i class="fa-solid fa-chevron-up text-xs"></i>'
        : `Show ${hiddenCount} more project${hiddenCount === 1 ? '' : 's'} <i class="fa-solid fa-chevron-down text-xs"></i>`;
    }
  };

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    render();
  });
  window.addEventListener('resize', render);
  render();
}

setupProjectsToggle();

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("hamburger-btn");
  if (!menu.classList.contains("hidden") && !menu.contains(e.target) && !btn.contains(e.target)) {
    toggleMenu();
  }
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("text-brand-400");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-brand-400");
    }
  });
});

// ===== BACKGROUND EFFECTS =====

/* --- Particle System --- */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = -1000;
  let mouseY = -1000;
  let animationId = null;
  let isLight = document.documentElement.classList.contains('light-theme');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseColor = isLight ? '0, 0, 0' : '255, 255, 255';
    const lineColor = isLight ? '0, 0, 0' : '139, 92, 246';

    particles.forEach((p, i) => {
      // Mouse interaction - gentle push
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.02;
        p.vx -= dx * force * 0.01;
        p.vy -= dy * force * 0.01;
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Wrap around edges
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 120 * 120) {
          const opacity = (1 - dist / (120 * 120)) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(drawParticles);
  }

  function init() {
    resizeCanvas();
    const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
    createParticles(count);
    if (animationId) cancelAnimationFrame(animationId);
    drawParticles();
  }

  // Mouse tracking
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  document.addEventListener('mousemove', onMouseMove);

  // Resize handler
  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles(Math.min(80, Math.floor(canvas.width * canvas.height / 15000)));
  });

  // Theme change observer
  const observer = new MutationObserver(() => {
    isLight = document.documentElement.classList.contains('light-theme');
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  init();
})();

/* --- Mouse-following Cursor Glow --- */
(function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  function updateGlow(e) {
    const isLight = document.documentElement.classList.contains('light-theme');
    const color1 = isLight ? '139, 92, 246' : '139, 92, 246';
    const color2 = isLight ? '99, 102, 241' : '59, 130, 246';
    const opacity = isLight ? '0.04' : '0.07';
    const x = e.clientX;
    const y = e.clientY;
    glow.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(${color1}, ${opacity}) 0%, rgba(${color2}, 0) 70%)`;
  }

  document.addEventListener('mousemove', updateGlow);
})();

/* --- Shooting Stars --- */
(function initShootingStars() {
  const container = document.querySelector('.shooting-stars-container');
  if (!container) return;

  function createStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    const startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.2;
    const startY = Math.random() * window.innerHeight * 0.3;
    const duration = Math.random() * 1.5 + 1;
    const delay = Math.random() * 0.5;

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = delay + 's';
    star.style.opacity = '0';

    container.appendChild(star);

    // Remove after animation completes
    setTimeout(() => {
      if (star.parentNode) star.remove();
    }, (duration + delay) * 1000 + 200);
  }

  function scheduleNext() {
    const delay = Math.random() * 8000 + 3000; // 3-11 seconds between stars
    setTimeout(() => {
      createStar();
      scheduleNext();
    }, delay);
  }

  // Start after a short initial delay
  setTimeout(() => {
    // Create a few initial stars
    for (let i = 0; i < 2; i++) {
      setTimeout(createStar, i * 1000);
    }
    scheduleNext();
  }, 2000);
})();
