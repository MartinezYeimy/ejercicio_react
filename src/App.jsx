
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/catalog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.classList.toggle("dark-mode", darkMode);
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((previousMode) => !previousMode);
  }

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <Catalog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
