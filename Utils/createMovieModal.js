import { state } from "../script.js";
import getImageUrl from "./getImageUrl.js";
import addLiEvListen from "./addLiEvListen.js";

function createMovieModal(e) {
  function getCoords() {
    if (coords.top > window.innerHeight - 600) {
      modal.style.top = window.innerHeight - 540 + "px";
    } else {
      modal.style.top = coords.top + "px";
    }
    if (coords.left >= window.innerWidth - 310) {
      modal.style.left = window.innerWidth - 310 + "px";
    } else if (coords.left < 40) {
      modal.style.left = "0px";
    } else {
      modal.style.left = coords.left + "px";
    }
  }

  function closeModal() {
    if (modal.parentElement !== body && window.innerWidth > 1024) return;

    if (window.innerWidth < 1024) {
      trigger.removeChild(modal);
    } else {
      body.removeChild(modal);
    }

    setTimeout(() => {
      addLiEvListen();
    }, 100);
  }

  function appendModal() {
    if (window.innerWidth < 1024) {
      trigger.appendChild(modal);
      let closeModalBtn = document.querySelector(".close-modal");
      closeModalBtn.addEventListener("click", closeModal);
    } else {
      body.insertBefore(modal, body.childNodes[0]);
      let btn = document.querySelector(".close-modal");
      btn.classList.add("zero-opacity");
      getCoords();
      window.addEventListener("scroll", closeModal);
    }
    modal.addEventListener("mouseleave", closeModal);
  }

  let body = document.querySelector("body");
  let trigger = e.target;
  let selectedMovie = state.library.find((movie) => {
    if (movie.id === +trigger.id) return movie;
  });
  let imgPath = getImageUrl(selectedMovie.backdrop_path, 1);
  let modal = document.createElement("article");
  let coords = trigger.getBoundingClientRect();

  // Preventing Other Modal
  let liOverEvents = document.querySelectorAll(".to-modal");
  liOverEvents.forEach((li) => {
    if (window.innerWidth < 1024) {
      li.removeEventListener("click", createMovieModal);
    } else li.removeEventListener("mouseover", createMovieModal);
  });
  // End

  modal.classList.add("modal");
  modal.innerHTML = `
      <div class="modal__container">
        <div class="modal__img">
          <img src="${imgPath}" alt="cover" />
          <i class="far fa-times-circle close-btn close-modal"></i>
          <div class="bottom-fade"></div>
        </div>

        <div class="modal__content">
          <div class="modal__content__header">
            <div class="modal__content__title"><h6>${
              selectedMovie.title
            }</h6></div>
            <div class="modal__content__wishlist"><i class="fas fa-plus-circle"></i></div>
          </div>
          <div class="modal__content__description">
            <p>${selectedMovie.overview}</p>
          </div>
          <div>
            <div class="Stars" style="--rating: ${
              selectedMovie.vote_average / 2
            };">
            </div>
          <div class="modal__content__release">
          <p>Data di uscita: ${selectedMovie.release_date}</p>
          </div>
        </div>
      </div>
    `;

  appendModal();
}

export default createMovieModal;
