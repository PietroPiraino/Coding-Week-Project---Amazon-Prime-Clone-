function getUrl(pathName, state) {
  const { api_key, base_url } = state.config;

  return `${base_url}${pathName}?api_key=${api_key}`;
}

export default getUrl;
