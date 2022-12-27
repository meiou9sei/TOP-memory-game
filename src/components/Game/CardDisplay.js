import { Cards } from "./Cards";
import { useState } from "react";

export default function CardDisplay() {
  const [cardsArray, setCardsArray] = useState(Cards);

  function shuffleCards(cards, cardId) {
    const cardToCheck = cardsArray.find((card) => card.id === cardId);
    if (cardToCheck.clicked) {
      console.log("you lose!");
    } else {
      console.log("you live this time...");
      // update card clicked boolean
      const newState = cardsArray.map((card) => {
        if (card.id === cardId) {
          return { ...card, clicked: true };
        }
        return card;
      });
      setCardsArray(newState);
    }
  }

  function randomize(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
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
