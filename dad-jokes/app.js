async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	displayJoke(joke);
}

const displayJoke = (joke) => {
	const li = document.createElement("li");
	li.className = "joke"
	li.innerText = joke.joke;
	document.getElementById("joke-ul").appendChild(li);
}

document
	.getElementById('get_joke')
	.addEventListener('click', generateJoke);


