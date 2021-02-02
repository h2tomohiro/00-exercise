const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL)

async function getMovies(url) {
	const resp = await fetch(url);
	const respData = await resp.json();

	console.log(respData);
	showMovies(respData.results);
}


function showMovies(movies) {
	main.innerHTML = ''

	movies.forEach((movie) => {
		const {poster_path, title, overview, vote_average} = movie;

		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");

		movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3></h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
		main.appendChild(movieEl);
	})
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green'
	} else if (vote >= 5) {
		return 'orange'
	} else {
		return 'red'
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)
		search.value = "";
	} else {
		window.location.reload()
	}
})


