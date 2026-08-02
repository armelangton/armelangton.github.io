(() => {
  document.querySelectorAll('.nav-links a[href$="#pricing"]').forEach(link => link.remove());

  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <h4>Palomma Consulting</h4>
          <p>Practical AI, workflow, and business systems support.</p>
        </div>
        <div>
          <h4>Services</h4>
          <a href="./services/managed-ai-agents.html">Managed AI Agents</a>
          <a href="./services/workflow-sprint.html">Workflow Automation</a>
          <a href="./services/business-applications.html">Business Applications</a>
        </div>
        <div>
          <h4>More Services</h4>
          <a href="./services/crm-revenue-operations.html">CRM &amp; Revenue Operations</a>
          <a href="./services/revenue-enablement.html">Sales Enablement</a>
          <a href="./services/ai-operations-assessment.html">Business Process Improvement</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="./index.html#case-studies">Selected Work</a>
          <a href="./index.html#faq">FAQ</a>
          <a href="./index.html#contact">Contact</a>
        </div>
      </div>`;
  }

  const hero = document.querySelector('.page-hero');
  const canvas = hero?.querySelector('.hero-network');
  if (!hero || !canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

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
  window.addEventListener('pagehide', () => {
    if (frame) cancelAnimationFrame(frame);
  }, { once: true });

  resize();
  draw();
})();
