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
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % serviceTabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + serviceTabs.length) % serviceTabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = serviceTabs.length - 1;
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
const canvas = hero?.querySelector(".hero-network");

if (hero && canvas) {
  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let scale = 1;
  let points = [];
  let animationFrame = null;

  const palette = [
    "rgba(95, 211, 198, .98)",
    "rgba(168, 200, 240, .96)",
    "rgba(31, 143, 136, .96)",
    "rgba(216, 154, 106, .96)",
    "rgba(255, 255, 255, .96)"
  ];

  function makePoints() {
    const count = Math.max(42, Math.min(76, Math.round(width / 24)));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width * .82,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .42,
      vy: (Math.random() - .5) * .42,
      radius: 1.7 + Math.random() * 2.9,
      color: palette[index % palette.length]
    }));
  }

  function resizeCanvas() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    makePoints();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    points.forEach((point) => {
      if (!reduceMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }

      if (point.x < 0 || point.x > width * .86) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;

      if (pointer.active) {
        const dx = pointer.x - point.x;
        const dy = pointer.y - point.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 220 && distance > 1) {
          const pull = (220 - distance) / 220;
          point.vx += dx * pull * .00012;
          point.vy += dy * pull * .00012;
        }
      }

      point.vx *= .998;
      point.vy *= .998;
      point.vx = Math.max(-1.05, Math.min(1.05, point.vx));
      point.vy = Math.max(-1.05, Math.min(1.05, point.vy));
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 158) {
          const opacity = .42 * (1 - distance / 158);
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(168, 200, 240, ${opacity.toFixed(3)})`;
          context.lineWidth = distance < 90 ? 1.15 : .8;
          context.stroke();
        }
      }
    }

    points.forEach((point) => {
      const distanceToPointer = pointer.active ? Math.hypot(pointer.x - point.x, pointer.y - point.y) : Infinity;
      const glow = distanceToPointer < 175;
      context.beginPath();
      context.arc(point.x, point.y, glow ? point.radius * 1.75 : point.radius, 0, Math.PI * 2);
      context.fillStyle = point.color;
      context.shadowColor = point.color;
      context.shadowBlur = glow ? 20 : 10;
      context.fill();
      context.shadowBlur = 0;
    });

    animationFrame = requestAnimationFrame(draw);
  }

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  });
  hero.addEventListener("pointerleave", () => { pointer.active = false; });
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  draw();

  window.addEventListener("pagehide", () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  }, { once: true });
}

if (hero && !document.querySelector(".platforms-strip")) {
  const platforms = [
    ["Salesforce", "salesforce"], ["HubSpot", "hubspot"], ["Zoho", "zoho"],
    ["Microsoft 365", "microsoft365"], ["Google Workspace", "googleworkspace"],
    ["ChatGPT", "openai"], ["Claude", "anthropic"], ["Gemini", "googlegemini"],
    ["Zapier", "zapier"], ["Slack", "slack"], ["LinkedIn", "linkedin"], ["Asana", "asana"]
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