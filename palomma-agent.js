(() => {
  const ASSISTANT_URL = 'https://ai-solution-platform-gamma.vercel.app/#assistant';
  if (document.querySelector('.palomma-agent-launcher')) return;

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'palomma-agent-launcher';
  launcher.textContent = 'Ask Palomma';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');

  const shell = document.createElement('div');
  shell.className = 'palomma-agent-shell';
  shell.setAttribute('role', 'dialog');
  shell.setAttribute('aria-modal', 'true');
  shell.setAttribute('aria-label', 'Palomma website assistant');

  const panel = document.createElement('div');
  panel.className = 'palomma-agent-panel';

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'palomma-agent-close';
  close.setAttribute('aria-label', 'Close Palomma assistant');
  close.textContent = '×';

  const frame = document.createElement('iframe');
  frame.title = 'Palomma Guide';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';

  panel.append(close, frame);
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
  shell.addEventListener('click', (event) => {
    if (event.target === shell) closeAssistant();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && shell.classList.contains('is-open')) closeAssistant();
  });
})();
