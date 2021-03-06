const onClickPost = () => {
	const inputName = document.getElementById("name").value;
	document.getElementById("name").value = "";

	const inputTweet = document.getElementById("post").value;
	document.getElementById("post").value = "";

	createTweet(inputName, inputTweet);
};

const createTweet = (name, tweet) => {
	const div = document.createElement("div");
	div.className = "post-list";

	const li = document.createElement("div");
	li.innerText = name;

	const post = document.createElement("div");
	post.innerText = tweet;

	div.appendChild(li).appendChild(post);

	document.getElementById("tweets").appendChild(div);
}

document
	.getElementById("post-button")
	.addEventListener('click', () => onClickPost());