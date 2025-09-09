import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      {/* Name */}
      <h1 className="hero-title">Santhosh Kumar</h1>
      <p className="hero-subtitle">
        Full Stack Developer | Python | Flask | React | MySQL
      </p>

      <h5 className="tech-title mt-4">Tech Stack</h5>

      <div className="hero-logos d-flex flex-wrap justify-content-center mt-3">
        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            width="50"
            height="50"
          />
          <p>React</p>
        </div>

        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="50"
            height="50"
          />
          <p>Python</p>
        </div>

        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
            alt="Flask"
            width="50"
            height="50"
          />
          <p>Flask</p>
        </div>

        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            width="50"
            height="50"
          />
          <p>MySQL</p>
        </div>

        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            width="50"
            height="50"
          />
          <p>Bootstrap</p>
        </div>

        <div className="logo-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width="50"
            height="50"
          />
          <p>GitHub</p>
        </div>
      </div>
    
      <div className="scroll-indicator mt-5">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
