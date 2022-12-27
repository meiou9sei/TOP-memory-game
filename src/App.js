import Footer from "./components/Footer";
import CardDisplay from "./components/Game/CardDisplay";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <CardDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default App;
