import Header from "./components/Header";
import Game from "./components/Game/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
