
const jokeEl = document.getElementById('joke');
const getJoke = document.getElementById('get_joke');

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	jokeEl.innerHTML = joke.joke;
	displayOldjoke(joke);
}

const displayOldjoke = (joke) => {
	const li = document.createElement("li");
	li.className = "joke"
	li.innerText = joke.joke;
	//document.getElementById("joke-ul").appendChild(li);
}

