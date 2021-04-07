function showToast() {
  let toast = document.createElement("div");
  const main = document.querySelector("main");
  main.appendChild(toast);
  toast.innerHTML = `<h1>Hey! Adesso sei registrato come guest tramite MovieDB</h1>`;
  toast.classList.add("toast");
  console.log(toast);
  console.log(toast.parentElement);

  setTimeout(() => {
    toast.classList.add("toast__is-hidden");
  }, 2500);

  //   body.removeChild(toast);
}

export default showToast;
