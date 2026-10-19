const menuButton = document.querySelector(".site-header__menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");
const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

function setMenuState(isOpen, { restoreFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  mobileNavigation.hidden = !isOpen;

  if (restoreFocus) {
    menuButton.focus();
  }
}

if (menuButton && mobileNavigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false, { restoreFocus: true });
    }
  });

  mobileMediaQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      setMenuState(false);
    }
  });
}
