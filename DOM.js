var wikiUrl = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=';
var guardianUrl = 'https://content.guardianapis.com/search?section=technology&q=';
var guardianUrlKey = '&api-key=bdde6d52-b31f-4652-a1b9-af896e911b60';

function resetData () {
  document.getElementById("mediawikiSearch").textContent = "";
  document.getElementById("guardianSearch").textContent = "";
}

function mediaAttribute (data) {
  document.getElementById("MediaTitle").textContent = "MediaData";
  var wikiData = document.getElementById("mediawikiSearch");
  wikiData.textContent = data[3][0].split("/")[4];
  wikiData.href = data[3][0];
}
function getMediaWikiData() {
  var keyword = document.getElementById("input").value;
  var searchWikiURL = wikiUrl + keyword;
  fetch(searchWikiURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      mediaAttribute(data);
    })
    .catch(function(error) {
      if (error instanceof TypeError) {
       document.getElementById("MediaTitle").textContent = "No data Found!";
        resetData();
      }
    })
}

function guardianAttribute(data) {
  document.getElementById("guardianTitle").textContent = 'The Guardian" Article';
  var guardianData = document.getElementById("guardianSearch");
  guardianData.textContent = data.response.results[0].webTitle;
  guardianData.href = data.response.results[0].webUrl;
  }
 function getGuardianData() {
   var guardianKey = document.getElementById("mediawikiSearch").textContent;
   var guardianLink = guardianUrl + guardianKey + guardianUrlKey;
   fetch(guardianLink)
     .then(function(response) {
       return response.json();
     })
     .then(function(data) {
       guardianAttribute(data);
     })
     .catch(function(error) {
       if (error instanceof TypeError) {
         document.getElementById("guardianSearch").textContent = "No data Found!";
         resetData();
      }
     })
 }
