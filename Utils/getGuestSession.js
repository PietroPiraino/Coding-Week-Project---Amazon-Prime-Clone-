import getUrl from "./getUrl.js";
import getData from "./getData.js";
import { state } from "../script.js";

async function getGuestSession() {
  const guestSessionUrl = getUrl("/authentication/guest_session/new", state);

  const result = await getData(guestSessionUrl);
  console.log(result);

  return result;
}

export default getGuestSession;
