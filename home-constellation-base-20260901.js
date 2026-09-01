(() => {
  const visualSizing = document.createElement('style');
  visualSizing.textContent = `
    .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]{grid-template-rows:240px 1fr!important}
    .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]::before{height:240px!important;aspect-ratio:auto!important;background-size:contain!important;background-position:center!important}
    .home-services-page .case-study-card a[href="./fire-protection-platform.html"] img,
    .home-services-page .case-study-card a[href="./learning-experience-platform.html"] img{
      padding:12px!important;
      object-fit:contain!important;
      object-position:center!important;
      background:linear-gradient(145deg,#f3f7fc,#eaf2fb)!important;
    }
    @media(max-width:1100px){
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]{grid-template-rows:210px 1fr!important}
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]::before{height:210px!important}
    }
    @media(max-width:800px){
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]{grid-template-rows:260px 1fr!important}
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]::before{height:260px!important}
    }
    @media(max-width:560px){
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]{grid-template-rows:220px auto!important}
      .home-services-page .case-study-card a[href="./commercial-lighting-platform.html"]::before{height:220px!important}
      .home-services-page .case-study-card a[href="./fire-protection-platform.html"] img,
      .home-services-page .case-study-card a[href="./learning-experience-platform.html"] img{
        padding:10px!important;
        object-fit:contain!important;
        object-position:center!important;
      }
    }
  `;
  document.head.appendChild(visualSizing);

  const base = document.createElement('script');
  base.src = './home-constellation-base.js?v=20260821-constellation-restore';
  base.defer = true;

  base.addEventListener('load', () => {
    const selectedWorkTitle = document.getElementById('selected-work-title');
    if (selectedWorkTitle) selectedWorkTitle.textContent = 'See What We Build';

    const salesImage = document.querySelector('.case-study-card a[href="./sales-enablement-platform.html"] img');
    if (salesImage) salesImage.src = './assets/project-screenshots/sales-my-work-hq.svg?v=20260821-home-hq';

    document.querySelectorAll('.implementation-home p').forEach(paragraph => {
      paragraph.textContent = paragraph.textContent
        .replace('Palomma standardizes how the work is scoped, implemented, tested, and handed over', 'We standardize how the work is scoped, implemented, tested, and handed over')
        .replace('Palomma may recommend a separate paid discovery or design phase', 'we may recommend a separate paid discovery or design phase')
        .replace('Palomma does not require an ongoing support contract to complete an implementation', 'We do not require an ongoing support contract to complete an implementation');
    });

    const platformTrack = document.querySelector('.platforms-track');
    if (platformTrack) {
      const originalItems = [...platformTrack.querySelectorAll('.platform-logo')];
      const platformKeys = {
        'HubSpot': 'hubspot',
        'Zoho': 'zoho',
        'Microsoft 365': 'microsoft365',
        'Google Workspace': 'googleworkspace',
        'ChatGPT': 'chatgpt',
        'Claude': 'claude',
        'Gemini': 'gemini',
        'Zapier': 'zapier',
        'Slack': 'slack',
        'LinkedIn': 'linkedin',
        'Asana': 'asana',
        'Salesforce': 'salesforce'
      };

      originalItems.forEach(item => {
        const label = item.querySelector('span')?.textContent?.trim();
        if (label && platformKeys[label]) item.dataset.platform = platformKeys[label];
      });

      const addedTools = [
        { key: 'make', label: 'Make', src: './assets/platform-logos/make.svg' },
        { key: 'n8n', label: 'n8n', src: './assets/platform-logos/n8n.svg' },
        { key: 'powerautomate', label: 'Power Automate', src: './assets/platform-logos/power-automate.svg' }
      ];

      const salesforceItems = originalItems.filter(item => item.dataset.platform === 'salesforce');
      salesforceItems.forEach(salesforceItem => {
        let anchor = salesforceItem;
        addedTools.forEach(tool => {
          const item = document.createElement('div');
          item.className = 'platform-logo platform-logo-added';
          item.dataset.platform = tool.key;

          const img = document.createElement('img');
          img.src = tool.src;
          img.alt = '';
          img.setAttribute('aria-hidden', 'true');

          const span = document.createElement('span');
          span.textContent = tool.label;

          item.append(img, span);
          anchor.insertAdjacentElement('afterend', item);
          anchor = item;
        });
      });

      const platformStyle = document.createElement('style');
      platformStyle.textContent = `
        .platforms-strip .platform-logo[data-platform="hubspot"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/hubspot.svg')!important}
        .platforms-strip .platform-logo[data-platform="zoho"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/zoho.svg')!important}
        .platforms-strip .platform-logo[data-platform="microsoft365"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/microsoft-icon.svg')!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="googleworkspace"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/google-icon.svg')!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="chatgpt"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/openai-icon.svg')!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="claude"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/claude-icon.svg')!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="gemini"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/google-gemini.svg')!important}
        .platforms-strip .platform-logo[data-platform="zapier"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/zapier.svg')!important}
        .platforms-strip .platform-logo[data-platform="slack"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/slack-icon.svg')!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="linkedin"] img{content:url('./assets/platform-logos/linkedin.svg')!important;max-width:96px!important}
        .platforms-strip .platform-logo[data-platform="asana"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/asana.svg')!important}
        .platforms-strip .platform-logo[data-platform="salesforce"] img{content:url('https://raw.githubusercontent.com/gilbarbara/logos/main/logos/salesforce.svg')!important}
        .platforms-strip .platform-logo[data-platform="make"] img,
        .platforms-strip .platform-logo[data-platform="n8n"] img,
        .platforms-strip .platform-logo[data-platform="powerautomate"] img{content:normal!important;max-width:34px!important}
        .platforms-strip .platform-logo[data-platform="hubspot"] span,
        .platforms-strip .platform-logo[data-platform="zoho"] span,
        .platforms-strip .platform-logo[data-platform="gemini"] span,
        .platforms-strip .platform-logo[data-platform="zapier"] span,
        .platforms-strip .platform-logo[data-platform="linkedin"] span,
        .platforms-strip .platform-logo[data-platform="asana"] span,
        .platforms-strip .platform-logo[data-platform="salesforce"] span{display:none!important}
        .platforms-strip .platform-logo[data-platform="microsoft365"] span,
        .platforms-strip .platform-logo[data-platform="googleworkspace"] span,
        .platforms-strip .platform-logo[data-platform="chatgpt"] span,
        .platforms-strip .platform-logo[data-platform="claude"] span,
        .platforms-strip .platform-logo[data-platform="slack"] span,
        .platforms-strip .platform-logo[data-platform="make"] span,
        .platforms-strip .platform-logo[data-platform="n8n"] span,
        .platforms-strip .platform-logo[data-platform="powerautomate"] span{display:inline-flex!important;align-items:center!important}
      `;
      document.head.appendChild(platformStyle);
    }

    const options = [...document.querySelectorAll('.hero-console .console-option')];
    if (options.length !== 4) return;

    const workflow = document.getElementById('workflow-value');
    const action = document.getElementById('action-value');
    const status = document.getElementById('status-value');
    const terminal = document.getElementById('terminal-value');

    const stages = {
      incoming: {
        workflow: 'Request intake',
        action: 'Gather customer and project details',
        status: 'Received',
        terminal: 'gathering the information needed for the next step'
      },
      context: {
        workflow: 'Information gathering',
        action: 'Summarize the request and supporting information',
        status: 'Context ready',
        terminal: 'customer details and documents found'
      },
      support: {
        workflow: 'AI support',
        action: 'Review the recommendation and supporting context',
        status: 'Recommendation ready',
        terminal: 'summary and recommendation prepared for human review'
      },
      review: {
        workflow: 'Human review',
        action: 'Approve and move forward',
        status: 'Ready to proceed',
        terminal: 'approved work moves to the next step'
      }
    };

    let activeIndex = 0;
    let timer = null;

    function render(index) {
      activeIndex = index;
      options.forEach((option, optionIndex) => {
        const active = optionIndex === index;
        option.classList.toggle('is-active', active);
        option.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      const stage = stages[options[index].dataset.stage];
      if (!stage) return;
      if (workflow) workflow.textContent = stage.workflow;
      if (action) action.textContent = stage.action;
      if (status) status.textContent = stage.status;
      if (terminal) terminal.textContent = stage.terminal;
    }

    function schedule() {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        render((activeIndex + 1) % options.length);
      }, 2600);
    }

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        render(index);
        schedule();
      });
    });

    const initial = Math.max(0, options.findIndex(option => option.classList.contains('is-active')));
    render(initial);
    schedule();

    window.addEventListener('pagehide', () => window.clearInterval(timer), { once: true });
  });

  document.head.appendChild(base);
})();
