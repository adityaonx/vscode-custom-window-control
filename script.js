/* eslint-env browser */
(function () {
  const style = Object.freeze({
    closeColor: "#ff5f56",
    minimizeColor: "#ffbd2e",
    maximizeColor: "#27c93f",
    size: "13px", // Desired size
    radius: "50%",
    hoverBackgroundColor: "#33373e",
    color: "#c0c0c0",
    fontSize: "8px", // Adjust font size for better fit
    fontWeight: "700",
    gap: "10px"
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
        child.style.borderRadius = style.radius;
        child.style.width = style.size;
        child.style.height = style.size;
        child.style.minWidth = style.size;
        child.style.minHeight = style.size;
        child.style.margin = "auto";
        child.style.cursor = "pointer";
        child.style.fontWeight = style.fontWeight;
        child.style.fontSize = style.fontSize;
        child.style.display = "flex";
        child.style.alignItems = "center";
        child.style.justifyContent = "center";
        child.style.boxSizing = "border-box";
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
