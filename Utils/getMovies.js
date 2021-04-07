import getUrl from "./geturl.js";
import getData from "./getData.js";
import { state } from "../script.js";

const getMovies = async function () {
  const categories = [
    "/movie/upcoming",
    "/movie/top_rated",
    "/movie/popular",
    "/movie/now_playing",
  ];

  for (let singleCategory of categories) {
    let CategoryURL = getUrl(singleCategory, state);
    let rawResponse = await getData(CategoryURL);
    let categoryName = singleCategory.slice(7);
    state[categoryName] = rawResponse.results;
  }
};

export default getMovies;
