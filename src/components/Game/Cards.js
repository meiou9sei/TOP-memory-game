export const Cards = [
  { id: 1, content: "apple", clicked: false },
  { id: 2, content: "banana", clicked: false },
  { id: 3, content: "cereal", clicked: false },
  { id: 4, content: "donuts", clicked: false },
  { id: 5, content: "eclair", clicked: false },
  { id: 6, content: "frankfurter", clicked: false },
  { id: 7, content: "gin", clicked: false },
  { id: 8, content: "humus", clicked: false },
  { id: 9, content: "indian curry", clicked: false },
  { id: 10, content: "juice", clicked: false },
];

// fetches multiple cards' info from API
async function fetchData(amountToFetch) {
  const dataArray = [];
  for (let i = 0; i < amountToFetch; i++) {
    const data = await fetchPokemon();
    dataArray.push(data);
  }
  return dataArray;
}

// fetchData(5)
//   .then((data) => console.log("resolved: ", data))
//   .catch((err) => console.log("rejected: ", err.message));

// fetches random pokemon name and image
async function fetchPokemon() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${getRandomIntInclusive(1, 905)}`
  );
  if (!res.ok) {
    throw new Error("cannot fetch data");
  }
  const data = await res.json();
  console.log(data.name);
  const dataObj = {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
  return dataObj;
}

fetchPokemon()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("rejected: ", err.message));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
