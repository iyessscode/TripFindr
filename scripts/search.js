const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
	const query = searchInput.value.trim();

	if (query.length === 0) return null;

	runSearch(query.toLowerCase());
	showResults();
});

searchInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') searchButton.click();
});

searchInput.addEventListener('input', () => {
	const query = searchInput.value.trim().toLowerCase();
	if (!query) {
		hideResults();
		return;
	}
});

async function runSearch(query) {
	const resultsContainer = document.getElementById('resultsContainer');
	resultsContainer.style.visibility = 'hiden';

	const response = await fetch('./destinations.json');
	const data = await response.json();

	const filtered = data.filter(
		(item) =>
			item.location.toLowerCase().includes(query) ||
			item.description.toLowerCase().includes(query) ||
			item.tags.some((tag) => tag.toLowerCase().includes(query))
	);

	console.log(data);
	console.log(filtered);

	if (filtered.length === 0) {
		resultsContainer.innerHTML = `<p class="no-result"">No destinations found for "${query}".</p>`;
		return;
	}

	resultsContainer.innerHTML = filtered
		.map(
			(d) => `
            <figure class="result-card">
                <img src="${d.image}" alt="${d.location}" />
                <figcaption>
									<h2>${d.location}</h2>
									<p>${d.description}</p>
								<button>visit</button>

								</figcaption>
            </figure>
            `
		)
		.join('');
}

function showResults() {
	const resultsContainer = document.getElementById('resultsContainer');
	resultsContainer.classList.remove('hidden');
}

function hideResults() {
	const resultsContainer = document.getElementById('resultsContainer');

	resultsContainer.classList.add('hidden');
}
