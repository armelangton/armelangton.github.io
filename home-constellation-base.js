(() => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.textContent.trim() === 'Pricing') link.remove();
  });

  document.querySelectorAll('.service-starting-price').forEach(item => item.remove());

  if (!document.querySelector('link[href*="home-implementation.css"]')) {
    const implementationStyle = document.createElement('link');
    implementationStyle.rel = 'stylesheet';
    implementationStyle.href = './home-implementation.css?v=20260820-1';
    document.head.appendChild(implementationStyle);
  }

  if (!document.querySelector('link[href*="palomma-agent.css"]')) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './palomma-agent.css?v=20260819-seven-segment-logo';
    document.head.appendChild(style);
  }

  if (!document.querySelector('script[src*="palomma-agent.js"]')) {
    const agent = document.createElement('script');
    agent.src = './palomma-agent.js?v=20260819-simplified-header';
    agent.defer = true;
    document.head.appendChild(agent);
  }

  const capabilityGrid = document.querySelector('#core-services .solution-grid');
  if (capabilityGrid) {
    capabilityGrid.innerHTML = `
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><path d="M80 28v16M73 28h14"/><rect class="soft-fill" x="38" y="44" width="84" height="76" rx="26"/><path d="M38 72H28v28h10M122 72h10v28h-10"/><circle class="accent-fill" cx="62" cy="78" r="7"/><circle class="accent-fill" cx="98" cy="78" r="7"/><path d="M60 99h40"/><path d="M52 120v14M108 120v14M52 134h56"/></svg></span>
        <h3>AI-Enabled Workflows</h3>
        <p>Use AI inside real business processes for research, summarization, recommendation, document review, knowledge access, drafting, or decision support.</p>
      </article>
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><rect class="soft-fill" x="58" y="22" width="44" height="32" rx="7"/><rect class="soft-fill" x="22" y="102" width="42" height="32" rx="7"/><rect class="accent-fill" x="96" y="102" width="42" height="32" rx="7"/><path d="M80 54v24M80 78H43v24M80 78h37v24"/><circle cx="80" cy="78" r="4" class="accent-fill"/></svg></span>
        <h3>Automation &amp; Integration</h3>
        <p>Move information, tasks, approvals, updates, and handoffs between people and systems without relying on manual follow-through.</p>
      </article>
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><rect class="soft-fill" x="20" y="32" width="42" height="32" rx="7"/><rect class="soft-fill" x="98" y="32" width="42" height="32" rx="7"/><rect class="soft-fill" x="20" y="102" width="42" height="32" rx="7"/><rect class="accent-fill" x="98" y="102" width="42" height="32" rx="7"/><path d="M62 48h36M41 64v38M119 64v38M62 118h36"/><circle class="accent-fill" cx="80" cy="83" r="13"/><path d="m73 83 5 5 10-13"/></svg></span>
        <h3>CRM &amp; Operational Systems Improvement</h3>
        <p>Improve configuration, process, data, reporting, usability, and workflow in systems your business already owns.</p>
      </article>
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><rect class="soft-fill" x="24" y="28" width="112" height="102" rx="10"/><path d="M24 50h112M38 39h2M48 39h2M58 39h2"/><rect class="accent-fill" x="38" y="68" width="34" height="42" rx="5"/><path d="M86 70h34M86 84h27M86 98h30M38 119h82"/></svg></span>
        <h3>Custom Business Systems</h3>
        <p>Build focused internal tools, applications, portals, or operational workspaces when existing software cannot support the work well enough.</p>
      </article>
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><rect class="soft-fill" x="26" y="30" width="108" height="100" rx="10"/><path d="M42 112V84M66 112V68M90 112V92M114 112V52"/><path d="M40 112h78"/><circle class="accent-fill" cx="114" cy="52" r="7"/><path d="m42 72 24-16 24 18 24-34"/></svg></span>
        <h3>Data, Reporting &amp; Visibility</h3>
        <p>Bring fragmented information together and give teams clearer operational reporting, dashboards, and decision support.</p>
      </article>
      <article class="service-card capability-card">
        <span class="service-visual" aria-hidden="true"><svg viewBox="0 0 160 160"><path class="soft-fill" d="M80 24 122 40v34c0 28-17 48-42 62-25-14-42-34-42-62V40z"/><path d="M58 77h44M80 55v44"/><circle class="accent-fill" cx="80" cy="77" r="18"/><path d="m70 77 7 7 14-17"/></svg></span>
        <h3>Approvals, Controls &amp; Governance</h3>
        <p>Add review steps, permissions, exception handling, auditability, and human oversight where important work needs control.</p>
      </article>`;
  }

  const coreServices = document.getElementById('core-services');
  if (coreServices && !document.querySelector('.implementation-home')) {
    const implementation = document.createElement('section');
    implementation.className = 'implementation-home';
    implementation.innerHTML = `
      <section class="implementation-home-section">
        <div class="container implementation-two-column">
          <div>
            <p class="section-label">ONE IMPLEMENTATION SERVICE</p>
            <h2>The solution is shaped by the problem.</h2>
          </div>
          <div class="implementation-copy">
            <p>Some projects need one focused workflow improved. Others need several systems connected, a CRM reworked, a new internal tool, AI added to an existing process, or a combination of those things.</p>
            <p>Palomma standardizes how the work is scoped, implemented, tested, and handed over — not the exact technology used to solve it.</p>
          </div>
        </div>
      </section>
      <section class="implementation-home-section">
        <div class="container implementation-two-column">
          <div>
            <p class="section-label">HOW THE PIECES COME TOGETHER</p>
            <h2>One project can use several capabilities at once.</h2>
          </div>
          <div class="implementation-examples">
            <article><h3>Customer or supplier workflow</h3><p>A request could be captured, information pulled from existing systems, AI used to summarize or compare it, approval routed to the right person, and the reviewed result written back to the system of record.</p></article>
            <article><h3>Internal operating system</h3><p>A team could use one workspace that combines CRM information, tasks, business rules, reporting, AI support, and connected data from other tools.</p></article>
            <article><h3>Improving what already exists</h3><p>A project may keep the current CRM or operational platform, simplify the process around it, repair data and reporting, connect missing systems, and automate work that still happens manually.</p></article>
          </div>
        </div>
      </section>
      <section class="implementation-home-section implementation-process">
        <div class="container">
          <p class="section-label">IMPLEMENTATION</p>
          <h2>How the work moves from problem to working system</h2>
          <ol class="process-list">
            <li><span>1</span><div><h3>Understand &amp; Scope</h3><p>Define the business problem, current workflow, people involved, systems, information, constraints, and the result the project needs to achieve.</p></div></li>
            <li><span>2</span><div><h3>Design the Right Solution</h3><p>Determine what should change and which combination of systems, AI, automation, integrations, process changes, or custom components is appropriate.</p></div></li>
            <li><span>3</span><div><h3>Build &amp; Implement</h3><p>Configure, connect, improve, or build the agreed solution within the defined project scope.</p></div></li>
            <li><span>4</span><div><h3>Validate &amp; Handoff</h3><p>Test the implemented system against the agreed requirements, correct scope-related defects, and provide the agreed documentation, training, access, and handoff.</p></div></li>
          </ol>
        </div>
      </section>
      <section class="implementation-home-section implementation-scope">
        <div class="container implementation-two-column">
          <div>
            <p class="section-label">SCOPE</p>
            <h2>Projects are defined around the work, not a preset package.</h2>
          </div>
          <div class="implementation-copy">
            <p>Scope is driven by factors such as the number of workflows and systems involved, integration requirements, data complexity, business rules, exceptions, users, approvals, and testing needs.</p>
            <p>Most straightforward projects can be scoped through the normal sales process. If substantial investigation or design work is required before a responsible implementation quote can be produced, Palomma may recommend a separate paid discovery or design phase.</p>
          </div>
        </div>
      </section>
      <section class="implementation-home-section implementation-after">
        <div class="container implementation-two-column">
          <div>
            <p class="section-label">AFTER IMPLEMENTATION</p>
            <h2>Handoff is the default. Ongoing help is optional.</h2>
          </div>
          <div class="implementation-copy">
            <p>After acceptance, the client receives the agreed documentation, training, access, and system handoff. Palomma does not require an ongoing support contract to complete an implementation.</p>
            <p>Clients who want continued help can use optional month-to-month optimization for bounded maintenance, tuning, minor adjustments, error review, integration upkeep, and recommendations. Material new scope is treated as a new implementation project.</p>
          </div>
        </div>
      </section>
      <section class="implementation-home-section">
        <div class="container">
          <p class="section-label">FAQ</p>
          <h2>Common questions</h2>
          <div class="implementation-faq">
            <details><summary>Do we have to replace the systems we already use?</summary><p>No. Many implementations improve or connect existing systems. Replacement only makes sense when the current tools cannot reasonably support the required work.</p></details>
            <details><summary>Can AI be only one part of the solution?</summary><p>Yes. AI may support one step in a larger workflow while automation, integrations, existing software, custom tools, and human review handle the rest.</p></details>
            <details><summary>Can human approvals stay in the process?</summary><p>Yes. Review and approval can remain wherever judgment, accountability, risk, or business policy requires it.</p></details>
            <details><summary>Do we need paid discovery before every project?</summary><p>No. Paid discovery is only used when a project is complex enough that substantial investigation or design is needed before the implementation can be scoped responsibly.</p></details>
            <details><summary>Who owns the system after the project?</summary><p>Client ownership and handoff are the default unless the specific project agreement states otherwise.</p></details>
            <details><summary>What happens if we want something new after launch?</summary><p>Minor bounded improvements can fit into optional optimization. A new major workflow, department, integration, feature set, or substantially different requirement is scoped as a new implementation project.</p></details>
          </div>
        </div>
      </section>`;
    coreServices.insertAdjacentElement('afterend', implementation);
  }

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
