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