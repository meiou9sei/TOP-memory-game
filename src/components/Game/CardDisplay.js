import { Cards } from "./Cards";
import { useState, useEffect } from "react";

export default function CardDisplay() {
  const [cardsArray, setCardsArray] = useState(Cards);
  const [cardsClicked, setCardsClicked] = useState(0);

  function shuffleCards(cards, cardId) {
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
  }

  // check if won game
  useEffect(() => {
    if (cardsClicked === cardsArray.length) {
      gameEnd("win");
    }
  }, [cardsClicked]);

  function randomize(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function gameEnd(winLoss) {
    if (winLoss === "win") {
      console.log("congrats, you won");
    } else if (winLoss === "loss") {
      console.log("you lose");
    }
    // TODO: disable clicking
  }

  return (
    <div className='card-display'>
      {randomize(cardsArray).map((card) => (
        <div
          key={card.id}
          className='card'
          onClick={() => shuffleCards(Cards, card.id)}
        >
          <span>{card.content}</span>
        </div>
      ))}
    </div>
  );
}
