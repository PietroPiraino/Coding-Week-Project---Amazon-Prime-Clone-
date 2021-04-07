import { state } from "../script.js";

function renderOnSearch() {
  const searchBar = document.querySelector("#search-bar");
  let input = searchBar.value.toUpperCase();

  let film = state.library;
  let ids = [];

  let result = film.filter((e) => {
    let title = e.title.toUpperCase();
    let alreadyExist = ids.some((item) => item === e.id);
    if (title.includes(input) && !alreadyExist && input) {
      ids.push(e.id);
      return true;
    }
  });
  ids = [];

  displayResult(result);
}

function displayResult(results) {
  let searchResults = document.querySelector(".search-results");
  searchResults.innerHTML = "";

  let listItems = results
    .map((element) => {
      if (!element) {
        let string = "";
      }
      let string = `<li><h7>${element.title}</h7></li>`;
      return string;
    })
    .join("");

  searchResults.innerHTML = listItems;
}

export default renderOnSearch;
