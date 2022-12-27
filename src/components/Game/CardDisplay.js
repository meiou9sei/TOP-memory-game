import { Cards } from "./Cards";

export default function CardDisplay() {
  return (
    <div className='card-display'>
      {Cards.map((card) => (
        <div key={card.id} className='card'>
          {card.content}
        </div>
      ))}
    </div>
  );
}
