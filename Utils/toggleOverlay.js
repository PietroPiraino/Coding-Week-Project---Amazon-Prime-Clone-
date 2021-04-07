function toggleOverlay() {
  const body = document.querySelector("body");
  let overlay = document.querySelector("#overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlay";
    body.prepend(overlay);
  } else body.removeChild(overlay);
}

export default toggleOverlay;
