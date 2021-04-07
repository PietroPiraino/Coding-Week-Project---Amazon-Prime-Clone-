import getImageUrl from "./getImageUrl.js";
import addLiEvListen from "./addLiEvListen.js";
import { scrollAmounts, sliderScroll } from "./sliderScrolls.js";

function createCarousel(sectionTitle, category) {
  const sectionsCont = document.querySelector(".sections-container");
  let section = document.createElement("section");
  section.classList.add("main__section");
  let uniqueID = new Date().getTime();
  scrollAmounts[`${uniqueID}`] = 0;

  let listItems = category
    .map((element) => {
      let imgURL = getImageUrl(element.backdrop_path, 1);
      let movieID = element.id;
      let string = `<li id="${movieID}" class="to-modal"><img src="${imgURL}" alt="cover" class="movie__cover"><span><h6>${element.title}</h6></span><img src="./Utils/bannerprime.jpg" class="prime-banner" alt="banner"></li>`;
      return string;
    })
    .join("");

  section.innerHTML = `<div class="container">
          <div class="container__header">
            <div class="container__logo-prime">
              <img
                src="/Utils/Prime_logo.png"
                alt="logo prime video"
                class="primelogo"
              />
            </div>
            <div class="container__section-title">
              <h5>${sectionTitle}</h5>
            </div>
          </div>

          <div class="container__carousel">
          <ul id="slider${uniqueID}" data-scrolls="${uniqueID}">${listItems}
          <a id="left${uniqueID}"
          class="switchLeft zero-opacity"
          ><</a
        >
        <a id="right${uniqueID}"
          class="switchRight"
          >></a
        ></ul>
          </div>
        </div>`;

  sectionsCont.appendChild(section);

  let leftSwitch = document.querySelector(`#left${uniqueID}`);
  let rightSwitch = document.querySelector(`#right${uniqueID}`);
  leftSwitch.addEventListener("click", sliderScroll);
  rightSwitch.addEventListener("click", sliderScroll);

  addLiEvListen();
}

export default createCarousel;
