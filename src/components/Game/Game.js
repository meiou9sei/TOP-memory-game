import Scoreboard from "./Scoreboard";
import useGameLogic from "./useGameLogic";

export default function Game() {
  const {
    cardsArray,
    cardsClicked,
    gameStatus,
    bestScore,
    randomize,
    shuffleCards,
    newGame,
  } = useGameLogic();

  return (
    <div className='game'>
      <div className='scoreboard'>
        <Scoreboard score={cardsClicked} bestScore={bestScore} />
      </div>
      <div className='card-display'>
        {(gameStatus === "active" &&
          randomize(cardsArray).map((card) => (
            <div
              key={card.id}
              className='card'
              onClick={() => shuffleCards(card.id)}
            >
              <span>
                <img src={card.image} alt={card.name} />
                <p>{card.name}</p>
              </span>
            </div>
          ))) || <div>You {gameStatus}!</div>}
      </div>
      <button onClick={() => newGame()}>New Game</button>
    </div>
  );
}
