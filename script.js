/* eslint-env browser */
(function () {
  const style = Object.freeze({
    closeColor: "#ff5f56",
    minimizeColor: "#ffbd2e",
    maximizeColor: "#27c93f",
    size: "5px", // Desired size
    gap: "6px" // Adjust gap for better fit
  });

  window.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
      const controls = document.querySelector(".titlebar-container .titlebar-right .window-controls-container");
      const leftTitlebar = document.querySelector(".titlebar-container .titlebar-left");

      if (!controls || !leftTitlebar) {
        return;
      }

      controls.parentNode.removeChild(controls);
      const closeControl = controls.lastChild;
      controls.removeChild(closeControl);
      controls.prepend(closeControl);

      controls.style.width = "auto";
      controls.style.gap = controls.style.marginLeft = style.gap;
      controls.childNodes.forEach((child, index) => {
        child.classList.add("custom-control-button"); // Apply the CSS class
        child.style.backgroundColor =
          index === 0 ? style.closeColor : index === 1 ? style.minimizeColor : style.maximizeColor;
        child.addEventListener("mouseleave", () => child.style.backgroundColor =
          index === 0 ? style.closeColor : index === 1 ? style.minimizeColor : style.maximizeColor);
        child.addEventListener("mouseenter", () => child.style.backgroundColor = style.hoverBackgroundColor);
      });
      leftTitlebar.appendChild(controls);
      clearInterval(timer);
    }, 100);

    // Hide favicon using CSS
    const link = document.querySelector('link[rel="icon"]');
    if (link) {
      link.href = ''; // Removes the favicon by setting an empty URL
    }
  });
})();
