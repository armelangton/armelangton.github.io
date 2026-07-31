const approvedHeroStyles = document.createElement("link");
approvedHeroStyles.rel = "stylesheet";
approvedHeroStyles.href = "./palomma-approved-hero.css?v=20260730-2";
approvedHeroStyles.dataset.palommaApprovedHero = "true";
if (!document.querySelector('link[data-palomma-approved-hero="true"]')) {
  document.head.appendChild(approvedHeroStyles);
}

const processNavLink = document.querySelector('.nav-link[href="#services"]');
if (processNavLink) processNavLink.textContent = "Services";

const servicesSection = document.getElementById("services");
if (servicesSection) {
  servicesSection.className = "section-wrapper business-services-section";
  servicesSection.innerHTML = `
    <div class="container">
      <div class="business-services-heading">
        <h2>Designed to scale.</h2>
      </div>
      <div class="business-services-grid">
        <article class="business-service-card">
          <div class="business-service-visual" aria-hidden="true">
            <svg viewBox="0 0 120 88" role="img"><path d="M24 57c0-18 15-33 33-33h8c18 0 33 15 33 33"/><rect x="34" y="34" width="54" height="38" rx="12"/><circle cx="51" cy="52" r="3"/><circle cx="71" cy="52" r="3"/><path d="M53 62h16M61 34V22M54 22h14"/><path d="M29 48H18v18h12M93 48h11v18H93"/></svg>
          </div>
          <h3>AI Solutions</h3>
          <p>Put AI agents and intelligent workflows to work on repetitive tasks, customer questions, research, analysis, and decisions.</p>
        </article>
        <article class="business-service-card">
          <div class="business-service-visual" aria-hidden="true">
            <svg viewBox="0 0 120 88" role="img"><rect x="18" y="18" width="84" height="56" rx="8"/><path d="M18 31h84M30 24h2M38 24h2M46 24h2"/><rect x="29" y="41" width="25" height="20" rx="3"/><path d="M64 43h25M64 51h20M64 59h15"/><path d="M91 67l8 8M99 67l-8 8"/></svg>
          </div>
          <h3>Business Applications</h3>
          <p>Replace spreadsheets, disconnected tools, and manual handoffs with applications designed around how your business operates.</p>
        </article>
        <article class="business-service-card">
          <div class="business-service-visual" aria-hidden="true">
            <svg viewBox="0 0 120 88" role="img"><rect x="17" y="15" width="86" height="60" rx="8"/><path d="M17 29h86"/><circle cx="37" cy="47" r="9"/><path d="M25 65c3-7 8-10 12-10s9 3 12 10M58 62l10-11 9 6 13-17"/><path d="M84 40h7v7"/></svg>
          </div>
          <h3>CRM &amp; Revenue Operations</h3>
          <p>Improve pipeline visibility, process consistency, forecasting, reporting, and revenue performance across your customer lifecycle.</p>
        </article>
        <article class="business-service-card">
          <div class="business-service-visual" aria-hidden="true">
            <svg viewBox="0 0 120 88" role="img"><rect x="19" y="22" width="82" height="48" rx="7"/><path d="M52 38l18 8-18 8z"/><path d="M33 70v7M87 70v7M42 77h36"/><circle cx="28" cy="31" r="8"/><circle cx="92" cy="31" r="8"/></svg>
          </div>
          <h3>Revenue Enablement</h3>
          <p>Give teams the knowledge, training, tools, and guidance they need to adopt new processes and perform more consistently.</p>
        </article>
        <article class="business-service-card">
          <div class="business-service-visual" aria-hidden="true">
            <svg viewBox="0 0 120 88" role="img"><rect x="14" y="18" width="25" height="18" rx="4"/><rect x="47" y="18" width="25" height="18" rx="4"/><rect x="80" y="18" width="25" height="18" rx="4"/><rect x="47" y="54" width="25" height="18" rx="4"/><path d="M39 27h8M72 27h8M59 36v18"/><circle cx="98" cy="63" r="11"/><path d="m93 63 4 4 7-9"/></svg>
          </div>
          <h3>Business Process Improvement</h3>
          <p>Remove bottlenecks, reduce manual work, and redesign workflows to improve efficiency, ROI, and your ability to scale.</p>
        </article>
      </div>
      <div class="business-outcomes" aria-label="Business outcomes">
        <span>Improve team performance</span>
        <span>Increase efficiency</span>
        <span>Strengthen ROI</span>
        <span>Support revenue growth</span>
      </div>
    </div>`;

  const serviceStyles = document.createElement("style");
  serviceStyles.textContent = `
    .home-page .business-services-section{background:linear-gradient(180deg,#f8fcfd 0%,#eef7fa 100%)}
    .home-page .business-services-heading{text-align:center;margin-bottom:clamp(2.5rem,5vw,4rem)}
    .home-page .business-services-heading h2{margin:0;color:var(--palomma-navy,#071a2d);font-family:Lora,serif;font-size:clamp(2.5rem,5vw,4.8rem);line-height:1.02;letter-spacing:-.04em}
    .home-page .business-services-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1rem;align-items:stretch}
    .home-page .business-service-card{display:flex;min-width:0;min-height:430px;padding:1.15rem 1.15rem 1.35rem;border:1px solid rgba(45,111,183,.16);border-radius:18px;flex-direction:column;background:rgba(255,255,255,.94);box-shadow:0 16px 40px rgba(7,26,45,.07);transition:transform 180ms ease,box-shadow 180ms ease}
    .home-page .business-service-card:hover{transform:translateY(-5px);box-shadow:0 22px 50px rgba(7,26,45,.11)}
    .home-page .business-service-visual{display:grid;height:150px;margin-bottom:1.3rem;border-radius:14px;place-items:center;background:linear-gradient(145deg,rgba(117,216,210,.2),rgba(45,111,183,.08))}
    .home-page .business-service-card:nth-child(even) .business-service-visual{background:linear-gradient(145deg,rgba(212,122,88,.12),rgba(117,216,210,.13))}
    .home-page .business-service-visual svg{width:82%;max-width:120px;fill:none;stroke:var(--palomma-navy,#071a2d);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
    .home-page .business-service-card h3{margin:0 0 .75rem;color:var(--palomma-navy,#071a2d);font-size:clamp(1.05rem,1.5vw,1.32rem);line-height:1.2}
    .home-page .business-service-card p{margin:0;color:var(--palomma-muted,#5d7182);font-size:.94rem;line-height:1.65}
    .home-page .business-outcomes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:2rem;border:1px solid rgba(45,111,183,.14);border-radius:14px;background:rgba(255,255,255,.72);box-shadow:0 10px 30px rgba(7,26,45,.04)}
    .home-page .business-outcomes span{position:relative;padding:1.05rem .85rem;color:var(--palomma-navy,#071a2d);font-size:.86rem;font-weight:700;text-align:center}
    .home-page .business-outcomes span+span{border-left:1px solid rgba(45,111,183,.14)}
    .home-page .business-outcomes span::before{display:inline-block;width:8px;height:8px;margin-right:.55rem;border-radius:50%;background:var(--palomma-teal,#12a5a1);content:""}
    @media(max-width:1100px){.home-page .business-services-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.home-page .business-service-card:last-child{grid-column:1/-1;min-height:0}.home-page .business-outcomes{grid-template-columns:repeat(2,minmax(0,1fr))}.home-page .business-outcomes span:nth-child(3){border-left:0;border-top:1px solid rgba(45,111,183,.14)}.home-page .business-outcomes span:nth-child(4){border-top:1px solid rgba(45,111,183,.14)}}
    @media(max-width:680px){.home-page .business-services-grid{grid-template-columns:1fr}.home-page .business-service-card,.home-page .business-service-card:last-child{grid-column:auto;min-height:0}.home-page .business-service-visual{height:132px}.home-page .business-outcomes{grid-template-columns:1fr}.home-page .business-outcomes span+span,.home-page .business-outcomes span:nth-child(3),.home-page .business-outcomes span:nth-child(4){border-top:1px solid rgba(45,111,183,.14);border-left:0}}
  `;
  document.head.appendChild(serviceStyles);
}

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
const heroPhoto = hero?.querySelector(".hero-photo");

if (hero && canvas) {
  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let scale = 1;
  let animationMaxX = 0;
  let points = [];
  let animationFrame = null;

  const palette = [
    "rgba(95, 211, 198, .98)",
    "rgba(168, 200, 240, .96)",
    "rgba(31, 143, 136, .96)",
    "rgba(216, 154, 106, .96)",
    "rgba(255, 255, 255, .96)"
  ];

  function getAnimationBoundary() {
    if (!heroPhoto) return width * .5;
    const heroRect = hero.getBoundingClientRect();
    const photoRect = heroPhoto.getBoundingClientRect();
    const photoStart = photoRect.left - heroRect.left;
    return Math.max(0, Math.min(width, photoStart - 18));
  }

  function makePoints() {
    const count = Math.max(34, Math.min(62, Math.round(animationMaxX / 20)));
    const safeMaxX = Math.max(0, animationMaxX - 8);
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * safeMaxX,
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
    animationMaxX = getAnimationBoundary();
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

      if (point.x <= 0) {
        point.x = 0;
        point.vx = Math.abs(point.vx);
      } else if (point.x >= animationMaxX) {
        point.x = animationMaxX;
        point.vx = -Math.abs(point.vx);
      }

      if (point.y <= 0) {
        point.y = 0;
        point.vy = Math.abs(point.vy);
      } else if (point.y >= height) {
        point.y = height;
        point.vy = -Math.abs(point.vy);
      }

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
    pointer.active = pointer.x <= animationMaxX;
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
    ["Microsoft", "microsoft"], ["Google Workspace", "googleworkspace"],
    ["OpenAI", "openai"], ["Claude", "anthropic"], ["Gemini", "googlegemini"],
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
      image.src = `https://cdn.simpleicons.org/${slug}`;
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
