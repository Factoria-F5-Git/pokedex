/* El div pokemon-container es el único div que existe en el HTML */
const pokemonContainer = document.querySelector('.pokemon-container');

/* Fetch: Llamamos a la API y nos devuelve un json que procesamos */
function fetchOnePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => createPokemonCard(data))
}

/* fetchManyPokemons: Nos permite llamar a la api X número de veces para ver diferentes pokemon */
function fetchManyPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchOnePokemon(i);
    }
}

/* createPokemonCard: Manipula el DOM para crear la tarjeta de Pokémon */
function createPokemonCard(pokemon) {
    // Crear div con clase pokemon-card
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // Crear div con clase img-container
    const sprinteContainer = document.createElement('div');
    sprinteContainer.classList.add('img-container');

    // Crear tag de imagen. En API las imágenes aparecen como "sprites", y hay varias para elegir, nosotras escogemos la imagen por defecto (default)
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default; 

    // Crear párrafo para el nombre (y convertir la primera letra en mayúscula)
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); 

    // Crear link a más info
    const aTag = document.createElement('a');
    aTag.classList.add('link');
    aTag.setAttribute('href', 'pokemon.html');
    aTag.textContent = "More info";

    // Añadir los elementos creados a la card
    sprinteContainer.appendChild(sprite);
    card.appendChild(sprinteContainer);
    card.appendChild(name);
    card.appendChild(aTag);

    // Añadir la card al DOM
    pokemonContainer.appendChild(card);
}

/* Ejecutar la función para llamar a los primeros X pokémons de la API*/
fetchManyPokemons(20);

