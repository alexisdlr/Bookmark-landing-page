import Contact from "./Components/contact/Contact";
import Extensions from "./Components/Extension/Extensions";
import Faqs from "./Components/Faqs/Faqs";
import Features from "./Components/features/Features";
import Footer from "./Components/footer/Footer";
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
        <Faqs />
        <Contact />
			</main>
      <Footer />
    </div>
  );
}

export default App;
