import { Cards } from "./Cards";
import { useState } from "react";

export default function CardDisplay() {
  const [cardsArray, setCardsArray] = useState(randomize(Cards));

  function randomize(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  return (
    <div className='card-display'>
      {cardsArray.map((card) => (
        <div
          key={card.id}
          className='card'
          onClick={() => setCardsArray(randomize(Cards))}
        >
          <span>{card.content}</span>
        </div>
      ))}
    </div>
  );
}
