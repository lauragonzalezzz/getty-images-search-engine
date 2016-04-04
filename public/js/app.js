var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(event){
  event.preventDefault();

  var searchInput = document.getElementById('searchInput').value;
  var searchTitle = document.getElementById('searchTitle');
  searchTitle.innerHTML = searchInput;

  var imagesRequest = new XMLHttpRequest();
  imagesRequest.addEventListener('load', getResults);
  imagesRequest.open('GET', "https://api.gettyimages.com/v3/search/images?phrase=" + searchInput);
  imagesRequest.setRequestHeader('Api-Key', '');
  imagesRequest.send();
});

var displayDiv = document.getElementById('displayDiv');

function getResults(){
// Clear User Input
  userInput = '';


  var allTheResults = JSON.parse(this.responseText);



};

//picture: displayDiv.innerHTML = allTheResults.images[0].display_sizes[0].uri;