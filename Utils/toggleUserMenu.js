import toggleOverlay from "./toggleOverlay.js";

function toggleUserMenu() {
  const navComp = document.querySelector(".nav__components");
  let userMenu = document.querySelector(".user");

  if (!userMenu) {
    userMenu = document.createElement("section");

    userMenu.classList.add("user");

    userMenu.innerHTML = `<div class="user__profiles">
              <div class="user__profiles__heading">
                <h4>Profili</h4>
                <i
                  class="far fa-times-circle close-btn user-menu__close-btn"
                ></i>
              </div>

              <ul class="user__profiles__ul">
                <li><i class="fas fa-user-circle"></i> <a>Nome Utente</a></li>
                <li><i class="far fa-star"></i><a>Bambini</a></li>
                <li>
                  <i class="fas fa-plus-circle"></i><a>Aggiungi profilo</a>
                </li>
                <li><a>Modifica profili</a></li>
                <li><a>Maggiori informazioni</a></li>
              </ul>
            </div>

            <div class="user__settings">
              <h4>Altro</h4>
              <ul class="user__settings__ul">
                <li><a>Account e impostazioni</a></li>
                <li><a>Dispositivi compatibili</a></li>
                <li><a>Aiuto</a></li>
                <li><a>Non sei Nome Utente? Esci</a></li>
              </ul>
            </div>`;

    navComp.appendChild(userMenu);
    let userCloseBtn = document.querySelector(".user-menu__close-btn");
    userCloseBtn.addEventListener("click", toggleUserMenu);
  } else {
    navComp.removeChild(userMenu);
  }

  let userMenuArrow = document.querySelector("#nav__user__arrow");
  userMenuArrow.classList.toggle("rotate");
  toggleOverlay();
}

export default toggleUserMenu;
