const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

const pokemonNameElement = document.getElementById('pokemonName');
const pokemonDetailsElement = document.getElementById('pokemonDetails');

function convertPokemonToHtml(pokemon) {
    return `
        <div class="pokemon ${pokemon.type}">
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <p>Altura: ${pokemon.height / 10} m</p>
            <p>Peso: ${pokemon.weight / 10} kg</p>
            <p>Habilidades: ${pokemon.abilities.map(ability => ability.name).join(', ')}</p>
        </div>
    `;
}

pokeApi.getPokemon(pokemonId).then((pokemon) => {
    pokemonNameElement.innerHTML = pokemon.name;
    pokemonDetailsElement.innerHTML = convertPokemonToHtml(pokemon);
});