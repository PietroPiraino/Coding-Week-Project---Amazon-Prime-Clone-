import { state } from "../script.js";

function getImageUrl(imgPath, index) {
  const { secure_base_url, backdrop_sizes } = state.config.images;
  return `${secure_base_url}${backdrop_sizes[index]}${imgPath}`;
}

export default getImageUrl;
