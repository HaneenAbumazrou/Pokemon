const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('name');

if (pokemonName) {
  // Fetch Pokémon details
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => displayPokemonDetails(data));
}

function displayPokemonDetails(pokemon) {
  const detailsContainer = document.getElementById('pokemon-details');
  
  detailsContainer.innerHTML = `
    <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
    <h1>${pokemon.name}</h1>
    <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    <p>Height: ${pokemon.height / 10} m</p>
    <p>Weight: ${pokemon.weight / 10} kg</p>
    <p>Base Experience: ${pokemon.base_experience}</p>
  `;
}
