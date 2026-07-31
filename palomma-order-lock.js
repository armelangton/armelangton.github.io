// Lock the homepage sections into the approved order after all dynamic content loads.
(() => {
  const hero = document.getElementById("home");
  const platforms = document.querySelector(".platforms-strip");
  const services = document.getElementById("services");
  const pricing = document.getElementById("pricing");
  const projects = document.getElementById("case-studies");
  const faq = document.getElementById("faq");
  const contact = document.getElementById("contact");

  if (hero && platforms) hero.insertAdjacentElement("afterend", platforms);
  if (platforms && services) platforms.insertAdjacentElement("afterend", services);
  if (services && pricing) services.insertAdjacentElement("afterend", pricing);
  if (pricing && projects) pricing.insertAdjacentElement("afterend", projects);
  if (projects && faq) projects.insertAdjacentElement("afterend", faq);
  if (faq && contact) faq.insertAdjacentElement("afterend", contact);

  // Keep all shared pricing information below the package cards.
  if (pricing) {
    const grid = pricing.querySelector(".pricing-grid");
    const support = pricing.querySelector(".pricing-support");
    const consultation = pricing.querySelector(".pricing-consultation");
    if (grid && support) grid.insertAdjacentElement("afterend", support);
    if (support && consultation) support.insertAdjacentElement("afterend", consultation);
  }
})();
