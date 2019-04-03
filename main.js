
function getMediaWikiData(event) {
  event.preventDefault();
 var keyword = document.getElementById("input").value;
  var searchWikiURL = wikiUrl + keyword;

  fetch(searchWikiURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("madia wiki: ", data);
      // var descriptionText = document.getElementById("mediawikiSearch").textContent;
      var resultTitle = data[3][0].split('/')[4];
      document.getElementById("mediawikiSearch").textContent  =resultTitle;
      mediaUrl = data[3][0];
      document.getElementById("mediawikiSearch").href= mediaUrl;
      // var resultUrl = data[3][0];
      fetch(guardianUrl+document.getElementById("mediawikiSearch").textContent+guardianUrlKey)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data.response.results[0].webUrl);
        document.getElementById("guardianSearch").href = data.response.results[0].webUrl;
        document.getElementById("guardianSearch").textContent = data.response.results[0].webTitle;
      })
      .catch(function(error) {
      console.log(error);
    })
})
}

document.getElementById('button').addEventListener("click", getMediaWikiData);
