// Example API URL (you might need to change this if using a different API)
const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=200';

// Fetching Pokémon data
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    displayPokemons(data.results);
  });

// Function to display Pokémon cards
function displayPokemons(pokemons) {
  const cardsContainer = document.getElementById('cards-container');

  pokemons.forEach((pokemon, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <p>#00${index + 1}</p>
    `;
    
    card.addEventListener('click', () => {
      window.location.href = `pokemon-details.html?name=${pokemon.name}`;
    });

    cardsContainer.appendChild(card);
  });
}
