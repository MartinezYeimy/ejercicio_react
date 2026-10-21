
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/catalog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Catalog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
