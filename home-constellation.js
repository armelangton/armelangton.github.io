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
