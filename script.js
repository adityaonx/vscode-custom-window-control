/* eslint-env browser */
(function () {
  // change style
  const style = Object.freeze({
    // button background colors
    closeColor: "#ff5f56", // red
    minimizeColor: "#ffbd2e", // yellow
    maximizeColor: "#27c93f", // green
    // button size
    size: "14px", // Larger size
    // border radius
    radius: "50%",
    // button hover background color
    hoverBackgroundColor: "#33373e",
    // button text color
    color: "#c0c0c0",
    fontSize: 10,
    fontWeight: "700",
    gap: "10px" // Increased gap
  });

  window.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
      const controls = document.querySelector(".titlebar-container .titlebar-right .window-controls-container");
      const leftTitlebar = document.querySelector(".titlebar-container .titlebar-left");
      // not loaded
      if (!controls || !leftTitlebar) {
        return;
      }

      // put close button in first position
      controls.parentNode.removeChild(controls);
      const closeControl = controls.lastChild;
      controls.removeChild(closeControl);
      controls.prepend(closeControl);

      controls.style.width = "auto";
      controls.style.gap = controls.style.marginLeft = style.gap;
      controls.childNodes.forEach((child, index) => {
        child.style.borderRadius = style.radius;
        child.style.width = child.style.height = style.size;
        child.style.margin = "auto";
        child.style.cursor = "pointer";
        child.style.fontWeight = style.fontWeight;
        child.style.fontSize = `${style.fontSize}px`;
        child.style.backgroundColor =
          index === 0 ? style.closeColor : index === 1 ? style.minimizeColor : style.maximizeColor;
        child.addEventListener("mouseleave", () => child.style.backgroundColor =
          index === 0 ? style.closeColor : index === 1 ? style.minimizeColor : style.maximizeColor);
        child.addEventListener("mouseenter", () => child.style.backgroundColor = style.hoverBackgroundColor);
      });
      leftTitlebar.appendChild(controls);
      clearInterval(timer);
    }, 100);
  });
})();
