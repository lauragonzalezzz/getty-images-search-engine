var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(event){
  event.preventDefault();

  var searchInput = document.getElementById('searchInput').value;
  var searchTitle = document.getElementById('searchTitle');
  searchTitle.innerHTML = searchInput;

  var imagesRequest = new XMLHttpRequest();
  imagesRequest.addEventListener('load', getResults);
  imagesRequest.open('GET', "https://api.gettyimages.com/v3/search/images?phrase=" + searchInput);
  imagesRequest.setRequestHeader('Api-Key', API_KEY);
  imagesRequest.send();
});

var container = document.getElementById('container');

function getResults(){
// Clear User Input
  searchInput.value = '';


  var allTheResults = JSON.parse(this.responseText);
  console.log('allTheResults',allTheResults);
  container.innerHTML = allTheResults.images[0].display_sizes[0].uri;

  for (var i = 0; i < allTheResults.images.length; i++){

  };

};

//picture: container.innerHTML = allTheResults.images[0].display_sizes[0].uri;