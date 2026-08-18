(() => {
  const ASSISTANT_URL = 'https://ai-solution-platform-gamma.vercel.app/embed/palomma';
  if (document.querySelector('.palomma-agent-launcher')) return;

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'palomma-agent-launcher';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-label', 'Ask a question about Palomma');
  launcher.innerHTML = `
    <span class="palomma-agent-launcher-copy">
      <span class="palomma-agent-launcher-label">Questions?</span>
      <span class="palomma-agent-launcher-note">Ask Palomma</span>
    </span>
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
        <p class="palomma-agent-eyebrow">PALOMMA GUIDE</p>
        <h2>What can we help you find?</h2>
        <p>Answers are grounded in approved Palomma information.</p>
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
