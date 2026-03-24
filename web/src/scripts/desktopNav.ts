export function initDesktopNav(): void {
  const navs = document.querySelectorAll<HTMLElement>("[data-desktop-nav]");

  navs.forEach((nav) => {
    const list = nav.querySelector<HTMLElement>("[data-nav-list]");
    const indicator = nav.querySelector<HTMLElement>("[data-nav-indicator]");
    const items = nav.querySelectorAll<HTMLElement>("[data-nav-item]");

    if (!list || !indicator || items.length === 0) return;

    const moveIndicator = (item: HTMLElement): void => {
      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      indicator.style.width = `${itemRect.width}px`;
      indicator.style.height = `${itemRect.height}px`;
      indicator.style.transform = `translate(${itemRect.left - listRect.left}px, ${itemRect.top - listRect.top}px)`;
      indicator.style.opacity = "1";
    };

    const hideIndicator = (): void => {
      indicator.style.opacity = "0";
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => moveIndicator(item));
      item.addEventListener("focusin", () => moveIndicator(item));
    });

    list.addEventListener("mouseleave", hideIndicator);
  });
}