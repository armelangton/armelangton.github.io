(() => {
  const core = document.createElement('script');
  core.src = './home-constellation-core.js?v=20260817-buyer-paths';
  core.defer = true;
  document.head.appendChild(core);

  if (!document.querySelector('link[href*="palomma-agent.css"]')) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './palomma-agent.css?v=20260817-agent';
    document.head.appendChild(style);
  }

  const agent = document.createElement('script');
  agent.src = './palomma-agent.js?v=20260817-agent';
  agent.defer = true;
  document.head.appendChild(agent);
})();
