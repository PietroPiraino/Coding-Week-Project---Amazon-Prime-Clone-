import createMovieModal from "./createMovieModal.js";

function addLiEvListen() {
  let liOverEvents = document.querySelectorAll(".to-modal");
  liOverEvents.forEach((li) => {
    if (window.innerWidth < 1024) {
      li.addEventListener("click", createMovieModal);
    } else li.addEventListener("mouseover", createMovieModal);
  });
}

export default addLiEvListen;
