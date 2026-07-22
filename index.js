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
