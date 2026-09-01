(() => {
  const hero = document.querySelector('.home-services-page .page-hero-inner h1');
  if (hero) hero.textContent = 'Streamlining business operations with AI-powered solutions that connect systems, automate work, and create new capabilities.';

  const solutionsHeading = document.querySelector('.home-services-page #core-services .solution-heading h2');
  if (solutionsHeading) solutionsHeading.textContent = 'Solutions';

  const original = document.createElement('script');
  original.src = './home-constellation-base-20260901.js?v=20260901-positioning';
  document.body.appendChild(original);
})();
