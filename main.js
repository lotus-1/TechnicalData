var wikiUrl = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=';
var newsUrl = 'https://newsapi.org/v2/everything?q=';
var newsUrlKey = '&from=2019-04-02&sortBy=popularity&apiKey=29ea58a571464e4eb732278dc4a2c1a3';
var guardianUrl = 'https://content.guardianapis.com/search?q=';
var guardianUrlKey = '&api-key=bdde6d52-b31f-4652-a1b9-af896e911b60';
function getMediaWikiData(event) {
  var keyword = document.getElementById('input').value;
  var searcWikiURL = wikiUrl + keyword;
  var searchNewsURL = newsUrl + keyword + newsUrlKey;
  var searchGuardianURL = guardianUrl + keyword + guardianUrlKey;
  fetch(searchURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var resultUrl = data[3][0];
      // var resultTitle = data[3][0].split('/')[4];
      var resultTitle = data[0];
      document.getElementById("title").textContent = resultTitle;
      document.getElementById("description").textContent = resultUrl;
    })

    .catch(function(error) {
      console.log(error);
    })
}

document.getElementById('button').addEventListener("click", getMediaWikiData);
document.getElementById('description').addEventListener("click", function(){
  window.open(document.getElementById("description").textContent,'_blank');
});
