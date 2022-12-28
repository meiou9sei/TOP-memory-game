import Header from "./components/Header";
import Game from "./components/Game/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <p>
          Click on a card - the cards will shuffle. Win the game by clicking on
          every card without clicking the same one twice!
        </p>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
