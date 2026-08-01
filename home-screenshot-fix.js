(() => {
  const applyScreenshotDesign = () => {
    const contact = document.querySelector('.contact-section');
    if (!contact) return false;

    const heading = contact.querySelector('.contact-copy h2');
    if (heading) heading.innerHTML = "Let's build something<br>great.";

    const currentFooter = document.querySelector('footer');
    if (!currentFooter || !currentFooter.classList.contains('site-footer')) {
      const footer = document.createElement('footer');
      footer.className = 'site-footer';
      footer.innerHTML = `
        <div class="container footer-grid">
          <div><h4>Palomma Consulting</h4><p>Practical AI, workflow, and business systems support.</p></div>
          <div><h4>Services</h4><a href="./services/ai-operations-assessment.html">AI &amp; Operations Assessment</a><a href="./services/managed-ai-agents.html">Managed AI Agents</a><a href="./services/ai-automation.html">AI &amp; Automation</a></div>
          <div><h4>Company</h4><a href="./index.html#case-studies">Selected Work</a><a href="./index.html#faq">FAQ</a><a href="./index.html#contact">Contact</a></div>
          <div><h4>Pricing</h4><a href="./index.html#pricing">View starting prices</a><a href="./index.html#contact">Book discovery</a></div>
        </div>`;
      currentFooter?.replaceWith(footer);
    }

    document.documentElement.classList.add('screenshot-closing-ready');
    return true;
  };

  let quietTimer;
  const applyAfterSettling = () => {
    window.clearTimeout(quietTimer);
    quietTimer = window.setTimeout(applyScreenshotDesign, 75);
  };

  const observer = new MutationObserver(applyAfterSettling);
  observer.observe(document.body, { childList: true, subtree: true });

  applyAfterSettling();
  window.setTimeout(applyScreenshotDesign, 250);
  window.setTimeout(applyScreenshotDesign, 750);
  window.setTimeout(() => {
    applyScreenshotDesign();
    observer.disconnect();
  }, 1500);
})();
