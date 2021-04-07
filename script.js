import openMenu from "./Utils/openMenu.js";
import toggleUserMenu from "./Utils/toggleUserMenu.js";
import openSearchMenu from "./Utils/openSearchMenu.js";
import handleSession from "./Utils/handleSession.js";
import getGenreList from "./Utils/getGenreList.js";
import getConfiguration from "./Utils/getConfiguration.js";
import getMovies from "./Utils/getMovies.js";
import createCarousel from "./Utils/createCarousel.js";
import renderGenres from "./Utils/renderGenres.js";
import renderOnSearch from "./Utils/renderOnSearch.js";

// Handling Menu Events

const exploreText = document.querySelector(".nav__explore__text");
const exploreArrow = document.querySelector("#nav__menu__arrow");

const categoriesArrow = document.querySelector("#nav__categories__arrow");
const categoriesLi = document.querySelector("#categories__li");

const userIcon = document.querySelector(".nav__user-circle");
const userNavName = document.querySelector(".nav__user__name");
let userMenuArrow = document.querySelector("#nav__user__arrow");

const searchCloseBtn = document.querySelector(".search-menu__close-btn");
const searchLens = document.querySelector(".nav__search");
const genreBtn = document.querySelector(".genre");
const homeBtn = document.querySelector(".home");
const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("keyup", renderOnSearch);
exploreText.addEventListener("click", openMenu);
exploreArrow.addEventListener("click", openMenu);
categoriesArrow.addEventListener("click", openMenu);
categoriesLi.addEventListener("click", openMenu);
userIcon.addEventListener("click", toggleUserMenu);
userNavName.addEventListener("click", toggleUserMenu);
userMenuArrow.addEventListener("click", toggleUserMenu);
searchLens.addEventListener("click", openSearchMenu);
searchCloseBtn.addEventListener("click", openSearchMenu);
genreBtn.addEventListener("click", renderGenres);
homeBtn.addEventListener("click", homeRendering);
// ----------------------------------//

const state = {
  config: {
    api_key: "13f0be17fe24783cc56199d660a026df",
    base_url: "https://api.themoviedb.org/3",
    images: null,
  },
  genreId: null,
  library: [],
};

handleSession();

function homeRendering() {
  const sectionsCont = document.querySelector(".sections-container");
  sectionsCont.innerHTML = "";

  Promise.all([getGenreList(), getMovies(), getConfiguration()]).then(() => {
    createCarousel("Film Popolari", state.popular);
    createCarousel("Adesso al cinema", state.now_playing);
    createCarousel("I piu votati", state.top_rated);
    createCarousel("In arrivo nelle sale", state.upcoming);

    let arrayOfCategory = [
      state.popular,
      state.now_playing,
      state.top_rated,
      state.upcoming,
    ];

    for (let i = 0; i < arrayOfCategory.length; i++) {
      for (let y = 0; y < arrayOfCategory[i].length; y++) {
        state.library.push(arrayOfCategory[i][y]);
      }
    }
  });
}

homeRendering();

// console.log(state.genreId);
// Export

export { state };
