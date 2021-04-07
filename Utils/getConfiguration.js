import getUrl from "./geturl.js";
import getData from "./getData.js";
import { state } from "../script.js";

const getConfiguration = async function () {
  const configurationUrl = getUrl("/configuration", state);
  const result = await getData(configurationUrl);
  state.config.images = result.images;
  return result;
};

export default getConfiguration;
