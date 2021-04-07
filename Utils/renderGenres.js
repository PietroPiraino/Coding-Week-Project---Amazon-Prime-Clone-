import createCarousel from "./createCarousel.js";
import { state } from "../script.js";

function renderGenres() {
  const sectionsCont = document.querySelector(".sections-container");
  sectionsCont.innerHTML = "";

  let genres = state.genreId;

  genres.forEach((element) => {
    let numeroGenere = element.id;
    let arrayGenere = [];

    state.library.forEach((film) => {
      let alreadyExist = arrayGenere.some((item) => item.id === film.id);

      if (film.genre_ids.some((item) => item === numeroGenere) && !alreadyExist)
        arrayGenere.push(film);
    });

    if (arrayGenere.length > 3) {
      createCarousel(element.name, arrayGenere);
    }
  });
}

export default renderGenres;
