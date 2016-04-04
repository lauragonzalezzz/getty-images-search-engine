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

// Makes Cards with Title, Image, and Caption
  for (var i = 0; i < allTheResults.images.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    container.appendChild(card);

    var title = document.createElement('div');
    title.innerHTML = allTheResults.images[i].title;
    title.className = "title";
    card.appendChild(title);

    var image = document.createElement('img');
    image.src = allTheResults.images[i].display_sizes[0].uri;
    image.style.height = (allTheResults.images[i].max_dimensions.height /10) + "px";
    image.className = "image";
    card.appendChild(image);

    var caption = document.createElement('div')
    caption.innerHTML = allTheResults.images[i].caption;
    caption.className = "caption";
    card.appendChild(caption);

  };

};
