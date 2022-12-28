// fetches random pokemon name and image
export async function fetchPokemon(pokemonId) {
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
