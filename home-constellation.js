(() => {
  const applyApprovedPositioning = () => {
    const hero = document.querySelector('.home-services-page .page-hero-inner h1');
    if (hero && hero.textContent !== 'Streamlining business operations with AI-powered solutions that connect systems, automate work, and create new capabilities.') {
      hero.textContent = 'Streamlining business operations with AI-powered solutions that connect systems, automate work, and create new capabilities.';
    }

    const solutionsHeading = document.querySelector('.home-services-page #core-services .solution-heading h2');
    if (solutionsHeading && solutionsHeading.textContent !== 'Solutions') {
      solutionsHeading.textContent = 'Solutions';
    }
  };

  applyApprovedPositioning();

  const coreServices = document.querySelector('.home-services-page #core-services');
  if (coreServices) {
    const positioningObserver = new MutationObserver(() => applyApprovedPositioning());
    positioningObserver.observe(coreServices, { childList: true, subtree: true, characterData: true });
  }

  const original = document.createElement('script');
  original.src = './home-constellation-base-20260901.js?v=20260901-positioning';
  original.addEventListener('load', applyApprovedPositioning);
  document.body.appendChild(original);
})();
