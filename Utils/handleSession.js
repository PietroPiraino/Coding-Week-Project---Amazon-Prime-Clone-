import getGuestSession from "./getGuestSession.js";
import showToast from "./showToast.js";

async function handleSession() {
  const sessionData = localStorage.getItem("mdb_session");

  if (!sessionData) {
    const newSessionData = await getGuestSession();

    if (newSessionData) {
      const sessionDataString = JSON.stringify(newSessionData);
      localStorage.setItem("mdb_session", sessionDataString);
      showToast();
      return true;
    }
    return false;
  } else {
    const parsedSessionData = JSON.parse(sessionData);
    const expiresDate = new Date(parsedSessionData.expires_at).getTime();
    const nowDate = new Date().getTime();

    if (expiresDate < nowDate) {
      localStorage.removeItem("mdb_session");
      await handleSession();
      return true;
    }
    return true;
  }
}

export default handleSession;
