const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listItems = [];

filter.addEventListener('input', function (e) {
	filterData(e.target.value);
})

getData();

async function getData() {
	const res = await fetch('https://randomuser.me/api?results=50')
	const {results} = await res.json()

	result.innerHTML = ''

	results.forEach(user => {
		const li = document.createElement('li');

		listItems.push(li);

		const image = document.createElement('img');
		image.src = `${user.picture.thumbnail}`;
		li.appendChild(image);

		const container = document.createElement('div');
		li.appendChild(container);
		container.classList.add('user-info');

		const username = document.createElement('h4');
		username.innerText = `${user.name.first} ${user.name.last}`;
		container.appendChild(username);

		const locationInfo = document.createElement('p');
		locationInfo.innerText = `${user.location.city}, ${user.location.country}`;
		container.appendChild(locationInfo);

		li.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="${user.name.first}" />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

		result.appendChild(li);

	});
}

function filterData(searchTerm) {
	listItems.forEach(item => {
		/* add conditional logic below */
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
	})
}
