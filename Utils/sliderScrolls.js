const scrollAmounts = {};

function sliderScroll(e) {
  let uniqueID = e.target.parentElement.dataset.scrolls;
  let leftSwitch = document.querySelector(`#left${uniqueID}`);
  let rightSwitch = document.querySelector(`#right${uniqueID}`);
  let slider = document.querySelector(`#slider${uniqueID}`);
  let scrollLength = slider.scrollWidth - slider.offsetWidth;
  const scrollPerClick = scrollLength / 10;

  if (e.target.id === `left${uniqueID}`) {
    slider.scrollTo({
      top: 0,
      left: (scrollAmounts[`${uniqueID}`] -= scrollPerClick),
      behavior: "smooth",
    });
  } else {
    slider.scrollTo({
      top: 0,
      left: (scrollAmounts[`${uniqueID}`] += scrollPerClick),
      behavior: "smooth",
    });
  }

  if (scrollAmounts[`${uniqueID}`] <= 0) {
    leftSwitch.classList.add("zero-opacity");
    scrollAmounts[`${uniqueID}`] = 0;
  }

  if (scrollAmounts[`${uniqueID}`] >= scrollLength) {
    rightSwitch.classList.add("zero-opacity");
    scrollAmounts[`${uniqueID}`] = scrollLength;
  }

  if (scrollAmounts[`${uniqueID}`] < scrollLength) {
    rightSwitch.classList.remove("zero-opacity");
  }

  if (scrollAmounts[`${uniqueID}`] > 0) {
    leftSwitch.classList.remove("zero-opacity");
  }
}

export { scrollAmounts, sliderScroll };
