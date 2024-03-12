const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b2b267baf2bf186c5a943686982d360b&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=b2b267baf2bf186c5a943686982d360b&query="';
const form = document.getElementById("form");
const search = document.getElementById("search");

//GET initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    //this clears the search with an empty string when we click enter.
    search.value = "";
  } else {
    window.location.reload();
  }
});

//NOTES:
//https://www.themoviedb.org/API
//I added my api key and a &page=1 stating that I only need 1 page.
//w means width so w1280 is the width of the photo it could have been any number.
//do not add / after number since the image source has one already.
//on SEARCH_API we use one double quote after query=" because we will
//concatenate the search with the searchTerm which
//is literally whatever initial we search for.
//using ASYNC/AWAIT helps us avoid .then().
