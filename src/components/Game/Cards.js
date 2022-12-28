// fetches random pokemon name and image
export async function fetchPokemon() {
  const pokemonId = getRandomIntInclusive(1, 905);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!res.ok) {
    throw new Error("cannot fetch data");
  }
  const data = await res.json();
  const dataObj = {
    id: pokemonId,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
  return dataObj;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
