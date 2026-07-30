document.querySelectorAll(".navbar-toggler").forEach((button) => {
  const selector = button.getAttribute("data-target");
  const menu = selector ? document.querySelector(selector) : null;

  if (!menu) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("show", !expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("show");
    });
  });
});

const serviceTabs = Array.from(document.querySelectorAll(".service-tab"));

function activateServiceTab(activeTab, moveFocus = false) {
  serviceTabs.forEach((tab) => {
    const isActive = tab === activeTab;
    const panel = document.getElementById(tab.getAttribute("aria-controls"));

    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.setAttribute("tabindex", isActive ? "0" : "-1");

    if (panel) panel.hidden = !isActive;
  });

  if (moveFocus) activeTab.focus();
}

serviceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateServiceTab(tab));

  tab.addEventListener("keydown", (event) => {
    let nextIndex = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % serviceTabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + serviceTabs.length) % serviceTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = serviceTabs.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    activateServiceTab(serviceTabs[nextIndex], true);
  });
});

const serviceInterest = document.getElementById("service-interest");

document.querySelectorAll(".pricing-interest[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    if (serviceInterest) serviceInterest.value = link.dataset.service || "";
  });
});

const hero = document.querySelector(".palomma-hero");
const heroHeadline = hero?.querySelector(".hero-content h1");

if (heroHeadline) {
  heroHeadline.textContent = "Accelerating revenue operations with AI-powered solutions and automation.";
}

if (hero) {
  const oldConstellation = hero.querySelector(".hero-constellation");
  if (oldConstellation) oldConstellation.remove();

  const heroImage = hero.querySelector(".hero-photo img");
  if (heroImage) {
    heroImage.src = "./assets/groupsitting.png";
    heroImage.alt = "Team gathered in a bright conference room while a presenter reviews a revenue operations dashboard";
  }

  if (!hero.querySelector(".hero-particles")) {
    const particles = document.createElement("div");
    particles.className = "hero-particles";
    particles.setAttribute("aria-hidden", "true");

    const particleData = [
      [5, 18, 7, 0], [12, 44, 5, 4], [18, 70, 6, 8], [28, 24, 4, 2],
      [34, 58, 7, 10], [43, 12, 5, 6], [50, 78, 4, 12], [58, 34, 6, 3],
      [66, 66, 5, 9], [74, 18, 7, 1], [82, 48, 4, 7], [90, 76, 6, 11]
    ];

    particleData.forEach(([left, top, size, delay], index) => {
      const particle = document.createElement("span");
      particle.style.setProperty("--left", `${left}%`);
      particle.style.setProperty("--top", `${top}%`);
      particle.style.setProperty("--size", `${size}px`);
      particle.style.setProperty("--delay", `${delay}s`);
      particle.style.setProperty("--duration", `${16 + (index % 5) * 3}s`);
      particles.appendChild(particle);
    });

    hero.prepend(particles);
  }

  if (!document.getElementById("palomma-hero-motion-styles")) {
    const style = document.createElement("style");
    style.id = "palomma-hero-motion-styles";
    style.textContent = `
      .palomma-hero { position: relative; overflow: hidden; }
      .hero-shell { position: relative; z-index: 2; }
      .hero-photo img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }
      .hero-particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
      .hero-particles span {
        position: absolute;
        left: var(--left);
        top: var(--top);
        width: var(--size);
        height: var(--size);
        border-radius: 999px;
        background: rgba(20, 138, 116, .24);
        box-shadow: 0 0 0 5px rgba(20, 138, 116, .035);
        animation: palomma-particle-drift var(--duration) ease-in-out var(--delay) infinite alternate;
      }
      .hero-particles span:nth-child(3n) { background: rgba(212, 122, 88, .22); box-shadow: 0 0 0 5px rgba(212, 122, 88, .035); }
      .hero-particles span:nth-child(4n) { background: rgba(80, 121, 174, .20); box-shadow: 0 0 0 5px rgba(80, 121, 174, .03); }
      @keyframes palomma-particle-drift {
        0% { transform: translate3d(-8px, 6px, 0) scale(.85); opacity: .3; }
        50% { transform: translate3d(12px, -10px, 0) scale(1.12); opacity: .75; }
        100% { transform: translate3d(-4px, 14px, 0) scale(.95); opacity: .4; }
      }
      @media (prefers-reduced-motion: reduce) {
        .hero-particles span { animation: none; opacity: .35; }
      }
    `;
    document.head.appendChild(style);
  }
}

if (hero && !document.querySelector(".platforms-strip")) {
  const platforms = [
    ["Salesforce", "salesforce"],
    ["HubSpot", "hubspot"],
    ["Zoho", "zoho"],
    ["Microsoft 365", "microsoft365"],
    ["Google Workspace", "googleworkspace"],
    ["ChatGPT", "openai"],
    ["Claude", "anthropic"],
    ["Gemini", "googlegemini"],
    ["Zapier", "zapier"],
    ["Slack", "slack"],
    ["LinkedIn", "linkedin"],
    ["Asana", "asana"]
  ];

  const strip = document.createElement("section");
  strip.className = "platforms-strip";
  strip.setAttribute("aria-labelledby", "platforms-strip-title");

  const label = document.createElement("p");
  label.id = "platforms-strip-title";
  label.className = "platforms-strip-label";
  label.textContent = "PLATFORMS WE WORK WITH";

  const viewport = document.createElement("div");
  viewport.className = "platforms-marquee";

  const track = document.createElement("div");
  track.className = "platforms-track";

  const addPlatformSet = (hidden = false) => {
    platforms.forEach(([name, slug]) => {
      const item = document.createElement("div");
      item.className = "platform-logo";
      if (hidden) item.setAttribute("aria-hidden", "true");

      const image = document.createElement("img");
      image.src = `https://cdn.simpleicons.org/${slug}/536775`;
      image.alt = hidden ? "" : `${name} logo`;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => image.remove());

      const nameLabel = document.createElement("span");
      nameLabel.textContent = name;

      item.append(image, nameLabel);
      track.appendChild(item);
    });
  };

  addPlatformSet(false);
  addPlatformSet(true);
  viewport.appendChild(track);
  strip.append(label, viewport);
  hero.insertAdjacentElement("afterend", strip);
}
