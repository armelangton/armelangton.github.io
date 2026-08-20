(() => {
  const staticWorkflow = document.querySelector('.hero-workflow-demo');
  if (staticWorkflow) {
    staticWorkflow.outerHTML = `<div class="hero-console" aria-label="Example business workflow"><div class="console-top"><div><strong>Example workflow</strong><span class="console-launch">See how a request moves through the work <i></i><i></i><i></i></span></div><span class="console-status">4 steps</span></div><div class="console-options" role="tablist" aria-label="Workflow stages"><button class="console-option is-active" type="button" role="tab" aria-selected="true" data-stage="incoming"><span class="option-icon">↓</span><span><small>Incoming</small><strong>New request received</strong></span><span class="option-chevron">›</span></button><button class="console-option" type="button" role="tab" aria-selected="false" data-stage="context"><span class="option-icon">▤</span><span><small>Gather information</small><strong>Customer details and documents found</strong></span><span class="option-chevron">›</span></button><button class="console-option" type="button" role="tab" aria-selected="false" data-stage="support"><span class="option-icon">✦</span><span><small>AI support</small><strong>Summarize and recommend</strong></span><span class="option-chevron">›</span></button><button class="console-option" type="button" role="tab" aria-selected="false" data-stage="review"><span class="option-icon">○</span><span><small>Human review</small><strong>Approve and move forward</strong></span><span class="option-chevron">›</span></button></div><div class="console-summary" aria-live="polite"><div><small>Workflow</small><strong id="workflow-value">Request intake</strong></div><div class="is-highlighted"><small>Next action</small><strong id="action-value">Gather customer and project details</strong></div><div><small>Status</small><strong id="status-value">Received</strong></div></div><div class="console-terminal"><span>› request received</span><strong id="terminal-value">gathering the information needed for the next step</strong><i></i><i></i><i></i></div></div>`;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stages = {
      incoming: ['Request intake', 'Gather customer and project details', 'Received', 'gathering the information needed for the next step'],
      context: ['Information gathering', 'Find details, documents, and history', 'In progress', 'customer details and documents found'],
      support: ['AI support', 'Summarize findings and recommend next steps', 'AI working', 'preparing a concise summary and recommendation'],
      review: ['Human review', 'Review, approve, and move the work forward', 'Ready to review', 'ready for a human decision']
    };
    const options = [...document.querySelectorAll('.console-option')];
    let index = 0;
    let timer;
    const showStage = next => {
      index = (next + options.length) % options.length;
      options.forEach((option, optionIndex) => {
        const selected = optionIndex === index;
        option.classList.toggle('is-active', selected);
        option.setAttribute('aria-selected', selected ? 'true' : 'false');
      });
      const values = stages[options[index].dataset.stage];
      if (!values) return;
      document.getElementById('workflow-value').textContent = values[0];
      document.getElementById('action-value').textContent = values[1];
      document.getElementById('status-value').textContent = values[2];
      document.getElementById('terminal-value').textContent = values[3];
    };
    const restart = () => {
      window.clearInterval(timer);
      if (!reduceMotion) timer = window.setInterval(() => showStage(index + 1), 2600);
    };
    options.forEach((option, optionIndex) => option.addEventListener('click', () => {
      showStage(optionIndex);
      restart();
    }));
    restart();
  }

  document.querySelector('.hero-network')?.classList.add('has-restored-motion');

  const ASSISTANT_URL = 'https://ai-solution-platform-gamma.vercel.app/embed/palomma';
  if (document.querySelector('.palomma-agent-launcher')) return;

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'palomma-agent-launcher';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-label', 'Ask a question about Palomma');
  launcher.innerHTML = `
    <span class="palomma-agent-launcher-label">Ask a question</span>
    <span class="palomma-agent-launcher-arrow" aria-hidden="true">→</span>
  `;

  const shell = document.createElement('div');
  shell.className = 'palomma-agent-shell';
  shell.setAttribute('role', 'dialog');
  shell.setAttribute('aria-modal', 'true');
  shell.setAttribute('aria-label', 'Palomma Guide');

  const panel = document.createElement('div');
  panel.className = 'palomma-agent-panel';

  const header = document.createElement('div');
  header.className = 'palomma-agent-header';
  header.innerHTML = `
    <div class="palomma-agent-identity">
      <span class="palomma-agent-brand-mark" aria-hidden="true"></span>
      <div>
        <h2>What can we help you find?</h2>
      </div>
    </div>
  `;

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'palomma-agent-close';
  close.setAttribute('aria-label', 'Close Palomma Guide');
  close.textContent = '×';

  const frameWrap = document.createElement('div');
  frameWrap.className = 'palomma-agent-frame-wrap';

  const frame = document.createElement('iframe');
  frame.title = 'Palomma Guide';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';

  header.append(close);
  frameWrap.append(frame);
  panel.append(header, frameWrap);
  shell.append(panel);
  document.body.append(launcher, shell);

  function openAssistant() {
    if (!frame.src) frame.src = ASSISTANT_URL;
    shell.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus();
  }

  function closeAssistant() {
    shell.classList.remove('is-open');
    launcher.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    launcher.focus();
  }

  launcher.addEventListener('click', openAssistant);
  close.addEventListener('click', closeAssistant);
  shell.addEventListener('click', event => {
    if (event.target === shell) closeAssistant();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && shell.classList.contains('is-open')) closeAssistant();
  });
})();