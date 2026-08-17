(() => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.textContent.trim() === 'Pricing') link.remove();
  });

  // Keep the existing homepage card layout, but align its content and links to
  // Palomma's current service architecture. This avoids redesigning the home
  // page while removing superseded offer names and starting prices.
  const homepageServiceUpdates = [
    {
      match: 'managed-ai-agents.html',
      href: './services/quoting-proposals.html',
      title: 'Quoting & Proposals',
      description: 'Use AI to help gather requirements, organize pricing and product information, prepare quotes, and move proposals through review faster.'
    },
    {
      match: 'workflow-sprint.html',
      href: './services/intake-document-processing.html',
      title: 'Intake & Document Processing',
      description: 'Turn incoming emails, forms, files, and requests into organized information that can be reviewed, routed, and entered into the right systems.'
    },
    {
      match: 'ai-operations-assessment.html',
      href: './services/orders-back-office.html',
      title: 'Orders & Back-Office Workflows',
      description: 'Reduce repetitive administrative work by connecting the steps, information, approvals, and systems behind recurring operational processes.'
    },
    {
      match: 'business-applications.html',
      href: './services/sales-operations-crm.html',
      title: 'Sales Operations & CRM Workflows',
      description: 'Improve the work around your CRM by helping teams research, prepare, update records, organize information, and move sales work forward.'
    }
  ];

  homepageServiceUpdates.forEach(update => {
    const card = [...document.querySelectorAll('#core-services .service-card')]
      .find(item => item.getAttribute('href')?.includes(update.match));
    if (!card) return;
    card.setAttribute('href', update.href);
    const title = card.querySelector('h3');
    const description = card.querySelector('p');
    if (title) title.textContent = update.title;
    if (description) description.textContent = update.description;
    card.querySelector('.service-starting-price')?.remove();
  });

  function connectSectionLink(label, sectionId) {
    const link = [...document.querySelectorAll('.nav-links a')]
      .find(item => item.textContent.trim() === label);
    if (!link) return;
    link.setAttribute('href', `#${sectionId}`);
    link.addEventListener('click', event => {
      const target = document.getElementById(sectionId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${sectionId}`);
    });
  }

  connectSectionLink('Selected Work', 'case-studies');
  connectSectionLink('Contact', 'contact');

  if (window.location.hash === '#case-studies' || window.location.hash === '#contact') {
    const sectionId = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
    });
  }

  document.querySelector('.site-footer')?.remove();

  // Replace third-party icon-CDN images with brand assets served by the product owners.
  const platformAssets = {
    'Salesforce': { src: 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg?w=1024', wordmark: true },
    'HubSpot': { src: 'https://www.hubspot.com/favicon.ico' },
    'Zoho': { src: 'https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg', wordmark: true },
    'Microsoft 365': { src: 'https://learn.microsoft.com/en-us/entra/identity-platform/media/howto-add-branding-in-apps/ms-symbollockup_mssymbol_19.svg' },
    'Google Workspace': { src: 'https://knowledge.workspace.google.com/static/images/admin/google-workspace-logo-dark-gray.png', wordmark: true },
    'ChatGPT': { src: 'https://chatgpt.com/favicon.ico' },
    'Claude': { src: 'https://claude.ai/favicon.ico' },
    'Gemini': { src: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff2c1526032e.svg' },
    'Zapier': { src: 'https://zapier.com/_next/image?q=80&url=https%3A%2F%2Fimages.ctfassets.net%2F27w7hkots21d%2F4uzr8DBARNtnqgY1fAMrsI%2Fb1c30673d991739d920e934fc5c6ff70%2Fimage.png&w=3840', wordmark: true },
    'Slack': { src: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' },
    'Asana': { src: 'https://assets.asana.biz/transform/34b29128-409a-42d0-b86d-7dd377c5b492/logo-primary-bright?format=webp&io=transform%3Afill%2Cwidth%3A2560', wordmark: true }
  };

  document.querySelectorAll('.platform-logo').forEach(item => {
    const label = item.querySelector('span')?.textContent.trim();
    const image = item.querySelector('img');
    if (!label || !image) return;

    // LinkedIn's corporate logo requires separate trademark permission for this use,
    // so keep the product name visible without displaying an unauthorized logo.
    if (label === 'LinkedIn') {
      image.remove();
      item.classList.add('platform-logo-text-only');
      return;
    }

    const asset = platformAssets[label];
    if (!asset) return;
    image.src = asset.src;
    image.removeAttribute('width');
    image.removeAttribute('height');
    image.classList.toggle('is-wordmark', Boolean(asset.wordmark));
    image.addEventListener('error', () => {
      image.remove();
      item.classList.add('platform-logo-text-only');
    }, { once: true });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Restore motion and interaction to the example workflow panel.
  const workflowOptions = [...document.querySelectorAll('.console-option')];
  const workflowValue = document.getElementById('workflow-value');
  const actionValue = document.getElementById('action-value');
  const statusValue = document.getElementById('status-value');
  const terminalValue = document.getElementById('terminal-value');

  const workflowStages = {
    incoming: {
      workflow: 'Request intake',
      action: 'Gather customer and project details',
      status: 'Received',
      terminal: 'gathering the information needed for the next step'
    },
    context: {
      workflow: 'Information gathering',
      action: 'Find details, documents, and history',
      status: 'In progress',
      terminal: 'customer details and documents found'
    },
    support: {
      workflow: 'AI support',
      action: 'Summarize findings and recommend next steps',
      status: 'AI working',
      terminal: 'preparing a concise summary and recommendation'
    },
    review: {
      workflow: 'Human review',
      action: 'Review, approve, and move the work forward',
      status: 'Ready to review',
      terminal: 'ready for a human decision'
    }
  };

  let workflowIndex = 0;
  let workflowTimer = null;

  function showWorkflowStage(index, userInitiated = false) {
    if (!workflowOptions.length) return;
    workflowIndex = (index + workflowOptions.length) % workflowOptions.length;
    const active = workflowOptions[workflowIndex];
    const stage = workflowStages[active.dataset.stage];
    if (!stage) return;

    workflowOptions.forEach((option, optionIndex) => {
      const selected = optionIndex === workflowIndex;
      option.classList.toggle('is-active', selected);
      option.setAttribute('aria-selected', selected ? 'true' : 'false');
    });

    const fields = [workflowValue, actionValue, statusValue, terminalValue].filter(Boolean);
    fields.forEach(field => field.classList.remove('workflow-pulse'));
    void active.offsetWidth;

    if (workflowValue) workflowValue.textContent = stage.workflow;
    if (actionValue) actionValue.textContent = stage.action;
    if (statusValue) statusValue.textContent = stage.status;
    if (terminalValue) terminalValue.textContent = stage.terminal;
    fields.forEach(field => field.classList.add('workflow-pulse'));

    if (userInitiated && workflowTimer) {
      clearInterval(workflowTimer);
      workflowTimer = null;
      if (!reduceMotion) startWorkflowMotion();
    }
  }

  function startWorkflowMotion() {
    if (reduceMotion || workflowOptions.length < 2 || workflowTimer) return;
    workflowTimer = setInterval(() => showWorkflowStage(workflowIndex + 1), 2600);
  }

  workflowOptions.forEach((option, index) => {
    option.addEventListener('click', () => showWorkflowStage(index, true));
  });

  if (workflowOptions.length) {
    showWorkflowStage(workflowOptions.findIndex(option => option.classList.contains('is-active')) || 0);
    startWorkflowMotion();
  }

  const hero = document.querySelector('.page-hero');
  const canvas = hero?.querySelector('.hero-network');
  if (!hero || !canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

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
    if (workflowTimer) clearInterval(workflowTimer);
  }, { once: true });

  resize();
  draw();
})();
