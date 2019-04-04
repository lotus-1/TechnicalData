function getData(event) {
  event.preventDefault();
  getMediaWikiData();
  getGuardianData();
}
document.getElementById("button").addEventListener("click", getData);
