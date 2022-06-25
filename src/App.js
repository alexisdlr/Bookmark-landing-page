import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
				<Hero />
			</main>
    </div>
  );
}

export default App;
