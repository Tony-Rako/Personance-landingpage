import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;