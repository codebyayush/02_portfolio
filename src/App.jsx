import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./app.css";
import About from "./components/about/About";


function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="About"><About/></section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
