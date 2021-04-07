import toggleOverlay from "./toggleOverlay.js";

// Single function allowing arrow rotation and relative menu display
function openMenu(e) {
  let parent = e.target.parentElement;
  let menu = parent.nextElementSibling;
  let arrow = parent.children[1];
  arrow.classList.toggle("rotate");
  menu.classList.toggle("flex-display");
  if (parent.classList.contains("nav__explore")) {
    toggleOverlay();
  }
}

export default openMenu;
