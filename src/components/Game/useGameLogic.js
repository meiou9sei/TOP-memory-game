import { Cards } from "./Cards";
import { useState, useEffect } from "react";

const useGameLogic = () => {
  const [cardsArray, setCardsArray] = useState(Cards);
  const [cardsClicked, setCardsClicked] = useState(0);
  const [gameStatus, setGameStatus] = useState("active");

  const newGame = () => {
    setCardsArray(Cards);
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

  // check if won game
  useEffect(() => {
    if (cardsClicked === cardsArray.length) {
      gameEnd("win");
    }
  }, [cardsClicked]);

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
    randomize,
    shuffleCards,
    newGame,
  };
};

export default useGameLogic;
