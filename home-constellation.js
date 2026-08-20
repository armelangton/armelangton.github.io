(() => {
  const base = document.createElement('script');
  base.src = './home-constellation-base.js?v=20260820-workflow-base';
  base.defer = true;

  base.addEventListener('load', () => {
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
