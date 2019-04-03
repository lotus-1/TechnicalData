function getData(event) {
  event.preventDefault();
  getMediaWikiData();
  getMediaguardianData();
}
document.getElementById("button").addEventListener("click", getData);
