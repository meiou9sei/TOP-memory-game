import { Cards } from "./Cards";

export default function CardDisplay() {
  return (
    <div>
      {Cards.map((card) => (
        <div key={card.id}>{card.content}</div>
      ))}
    </div>
  );
}
