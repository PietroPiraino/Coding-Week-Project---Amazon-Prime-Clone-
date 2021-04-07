import getUrl from "./geturl.js";
import getData from "./getData.js";
import { state } from "../script.js";

let genreIdLink = "/genre/movie/list";

const getGenreList = async function () {
  const genreListURL = getUrl(genreIdLink, state);
  const rawResponse = await getData(genreListURL);
  state.genreId = rawResponse.genres;
  return rawResponse;
};

export default getGenreList;
