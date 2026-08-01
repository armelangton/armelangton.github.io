(() => {
  const faqItems = [
    ['What is included in the fixed fee?', 'Each package includes discovery, configuration, testing, deployment, training and handover, plus 30 days of post-launch support. The project scope and deliverables are confirmed before work begins.'],
    ['How do I know which package fits my project?', 'The right package depends on the number of assistants, workflows, integrations, and users involved. We will talk through the business problem first and confirm the appropriate scope before you commit.'],
    ['What can Palomma build?', 'Palomma builds practical AI assistants, workflow automations, connected business applications, and tools that support sales, operations, enablement, and other repeatable business processes.'],
    ['How long does an implementation take?', 'Timing depends on complexity, access to systems and information, and the number of integrations involved. A focused solution can move quickly, while connected or custom solutions require more design, testing, and coordination. Your timeline is defined with the project scope.'],
    ['Who owns the solution and the data?', 'You own your data, branding, business configuration, and outputs. Palomma retains ownership of its reusable framework, code, templates, deployment tools, and methods. Your agreement includes a license to use the solution configured for your business.'],
    ['What happens after launch?', 'The implementation includes training, handover, defect correction, and a 30-day stabilization period. After that, ongoing hosting, monitoring, maintenance, and agreed improvements can be managed by Palomma or handled by your team.'],
    ['Will my team be dependent on Palomma?', 'No. The goal is to deliver a working solution your team can understand and use. Documentation and training are included so the solution does not depend on continuous consulting support.']
  ];

  document.getElementById('faq')?.remove();
  const faq = document.createElement('section');
  faq.id = 'faq';
  faq.className = 'section-wrapper homepage-faq-section';
  faq.setAttribute('aria-labelledby', 'faq-title');
  faq.innerHTML = `
    <div class="container homepage-faq-container">
      <div class="homepage-faq-heading"><h2 id="faq-title">Frequently Asked Questions</h2></div>
      <div class="homepage-faq-list">
        ${faqItems.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}
      </div>
    </div>`;

  const oldCta = document.querySelector('.cta-section');
  oldCta?.insertAdjacentElement('beforebegin', faq);

  const contact = document.createElement('section');
  contact.id = 'contact';
  contact.className = 'section-wrapper contact-section';
  contact.innerHTML = `
    <div class="container">
      <div class="contact-cta-card">
        <div class="contact-copy"><h2>Let's build something great.</h2></div>
        <div class="contact-links">
          <a href="mailto:armelangton@gmail.com">Get in Touch</a>
          <a href="tel:+13179706662">Call or Text 317-970-6662</a>
        </div>
      </div>
    </div>`;
  oldCta?.replaceWith(contact);

  const oldFooter = document.querySelector('.site-footer');
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = '<div class="container"><p>© 2026 Amy Melangton</p></div>';
  oldFooter?.replaceWith(footer);

  const hero = document.querySelector('.page-hero');
  const canvas = hero?.querySelector('.hero-network');
  if (!hero || !canvas) return;

  const context = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let scale = 1;
  let points = [];
  let frame = null;
  const palette = [
    'rgba(95,211,198,.95)',
    'rgba(168,200,240,.9)',
    'rgba(31,143,136,.9)',
    'rgba(216,154,106,.88)',
    'rgba(255,255,255,.9)'
  ];

  function makePoints() {
    const count = Math.max(38, Math.min(68, Math.round(width / 22)));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .32,
      vy: (Math.random() - .5) * .32,
      radius: 1.4 + Math.random() * 2.5,
      color: palette[index % palette.length]
    }));
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    makePoints();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      if (!reduceMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }
      if (point.x <= 0 || point.x >= width) point.vx *= -1;
      if (point.y <= 0 || point.y >= height) point.vy *= -1;

      for (let j = i + 1; j < points.length; j += 1) {
        const other = points[j];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 125) {
          context.strokeStyle = `rgba(168,200,240,${(1 - distance / 125) * .22})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }

      if (pointer.active) {
        const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (distance < 150) {
          context.strokeStyle = `rgba(117,216,210,${(1 - distance / 150) * .35})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
      }

      context.fillStyle = point.color;
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();
    }
    if (!reduceMotion) frame = requestAnimationFrame(draw);
  }

  hero.addEventListener('pointermove', event => {
    const rect = hero.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  });
  hero.addEventListener('pointerleave', () => { pointer.active = false; });
  window.addEventListener('resize', resize);
  resize();
  draw();

  window.addEventListener('pagehide', () => {
    if (frame) cancelAnimationFrame(frame);
  }, { once: true });
})();
