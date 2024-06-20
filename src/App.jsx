import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./app.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="About"><About/></section>
      <section id="Experience"><Experience/></section>
      <section id="Projects"><Projects/></section>
      <section id="Contact"><Contact/></section>
    </>
  );
}

export default App;
