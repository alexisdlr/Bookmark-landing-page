import Extensions from "./Components/Extension/Extensions";
import Features from "./Components/features/Features";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
				<Hero />
        <Features />
        <Extensions />
			</main>
    </div>
  );
}

export default App;
