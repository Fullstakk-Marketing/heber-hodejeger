export function initMobileNav() {
  const navs = document.querySelectorAll<HTMLElement>("[data-mobile-nav]");

  navs.forEach((nav) => {
    const button = nav.querySelector<HTMLButtonElement>("[data-mobile-nav-button]");
    const overlay = nav.querySelector<HTMLButtonElement>("[data-mobile-nav-overlay]");
    const panel = nav.querySelector<HTMLElement>("[data-mobile-nav-panel]");
    const links = nav.querySelectorAll<HTMLAnchorElement>("[data-mobile-nav-link]");

    const line1 = nav.querySelector<HTMLElement>("[data-line-1]");
    const line2 = nav.querySelector<HTMLElement>("[data-line-2]");
    const line3 = nav.querySelector<HTMLElement>("[data-line-3]");

    if (!button || !overlay || !panel || !line1 || !line2 || !line3) return;

    const openMenu = () => {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Lukk meny");
      panel.setAttribute("aria-hidden", "false");

      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");

      overlay.classList.remove("pointer-events-none", "opacity-0");
      overlay.classList.add("opacity-100");

      line1.classList.remove("-translate-y-2");
      line1.classList.add("top-1/2", "translate-y-1/2", "rotate-45", "bg-white");

      line2.classList.remove("bg-heber-black");
      line2.classList.add("opacity-0", "bg-white");
    

      line3.classList.remove("translate-y-1", "top-1/6", "bg-heber-black");
      line3.classList.add("top-1/2", "translate-y-1/2", "-rotate-45", "bg-white");

      document.body.classList.add("overflow-hidden");
    };

    const closeMenu = () => {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Åpne meny");
      panel.setAttribute("aria-hidden", "true");

      panel.classList.remove("translate-x-0");
      panel.classList.add("translate-x-full");

      overlay.classList.add("pointer-events-none", "opacity-0");
      overlay.classList.remove("opacity-100");

      line1.classList.add("-translate-y-2", "bg-heber-black");
      line1.classList.remove("top-1/2", "translate-y-1/2",  "rotate-45", "bg-white");

      line2.classList.add("bg-heber-black");
      line2.classList.remove("opacity-0", "bg-white");

      line3.classList.add("translate-y-1", "top-1/6", "bg-heber-black");
      line3.classList.remove("top-1/2", "translate-y-1/2", "-rotate-45", "bg-white");

      document.body.classList.remove("overflow-hidden");
    };

    const toggleMenu = () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    };

    button.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
    });
  });
}