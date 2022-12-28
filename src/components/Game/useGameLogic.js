import { fetchPokemon } from "./Cards";
import { useState, useEffect } from "react";

const MAXPOKEMON = 905;

const useGameLogic = () => {
  const [cardsClicked, setCardsClicked] = useState(0);
  const [gameStatus, setGameStatus] = useState("active");
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") || 0
  );
  const [cardsArray, setCardsArray] = useState([]);
  useEffect(function fetchCards() {
    fetchData(5);
  }, []);
  const [isCardsLoaded, setIsCardsLoaded] = useState(false);

  // fetches multiple cards' info from API
  async function fetchData(amountToFetch) {
    const dataArray = [];
    const usedPokemon = [];
    for (let i = 0; i < amountToFetch; i++) {
      let pokemonId = getRandomIntInclusive(1, MAXPOKEMON);
      // prevents duplicates
      while (usedPokemon.includes(pokemonId)) {
        pokemonId = getRandomIntInclusive(1, MAXPOKEMON);
      }
      usedPokemon.push(pokemonId);
      const data = await fetchPokemon(pokemonId);
      dataArray.push(data);
    }
    setCardsArray(dataArray);
    setIsCardsLoaded(true);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const newGame = () => {
    setIsCardsLoaded(false);
    fetchData(5);
    setCardsClicked(0);
    setGameStatus("active");
  };

  const shuffleCards = (cardId) => {
    // check if card was clicked before or not
    const cardToCheck = cardsArray.find((card) => card.id === cardId);
    if (cardToCheck.clicked) {
      gameEnd("loss");
    } else {
      // update card clicked boolean
      const newState = cardsArray.map((card) => {
        if (card.id === cardId) {
          return { ...card, clicked: true };
        }
        return card;
      });
      setCardsArray(newState);
      setCardsClicked((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    // update bestScore
    if (cardsClicked > bestScore) {
      setBestScore(cardsClicked);
    }

    // check if won game
    if (isCardsLoaded && cardsClicked === cardsArray.length) {
      gameEnd("win");
    }
  }, [cardsClicked]);

  // saves bestScore to localStorage
  useEffect(
    function updateLocalStorageBestScore() {
      localStorage.setItem("bestScore", bestScore);
    },
    [bestScore]
  );

  const randomize = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const gameEnd = (winLoss) => {
    if (winLoss === "win") {
      setGameStatus("won");
    } else if (winLoss === "loss") {
      setGameStatus("lost");
    }
  };

  return {
    cardsArray,
    cardsClicked,
    gameStatus,
    bestScore,
    randomize,
    shuffleCards,
    newGame,
  };
};

export default useGameLogic;
