function removeUrlAnchor(url) {
  return url.includes('#') ? url.substring(0, url.indexOf('#')) : url;
}