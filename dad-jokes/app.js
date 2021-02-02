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

	// const ul = document.createElement("ul");
	// ul.className = "joke-ul";

	// const li = document.createElement("li");
	// li.className = "joke"
	//
	// ul.appendChild(li);
	jokeEl.innerHTML = joke.joke;

	//li.appendChild(jokeEl);

	//document.getElementById("joke").appendChild(li);
}