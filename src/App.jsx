import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import CareerObjective from "./components/CareerObjective";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="section full-height d-flex align-items-center justify-content-center">
        <Hero />
      </section>

      <section id="expertise" className="section">
        <Expertise />
      </section>


      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="work" className="section">
        <CareerObjective />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

    </>
  );
}

export default App;
