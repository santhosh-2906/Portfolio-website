import React from "react";
import "../styles/Projects.css";
import theatreImg from "../assets/theatre.png";
import cookbookImg from "../assets/cookbook.png";

const projects = [
  {
    title: " Theatre Ticket Booking System",
    description:
      "Full-stack app with Admin Dashboard. Admin can manage movies, screens, seats, and snacks. Users can browse movies, select seats, book tickets, and order snacks.",
    image: theatreImg,
    liveDemo: "https://theatre-website-1.onrender.com/",
    github: "https://github.com/santhosh-2906/Theatre_Website",
  },
  {
    title: "🍳 CookBook - Recipe Notes App",
    description:
      "A cooking notes app where users can add recipes, ingredients, and manage steps. Includes cooking mode with timers, step skipping, and pause/resume functionality.",
    image: cookbookImg,
    liveDemo: "https://cookbook-frontend-oi5f.vercel.app/",
    github: "https://github.com/santhosh-2906/cookbook_frontend",
  },
  {
    title: "📌 To-do App",
    description:
      "A simple task manager project with crud operations.",
    image: "/assets/project3.png",
    liveDemo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <h2 className="projects-title">// My Work</h2>
      <div className="container">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      🔗 Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        width="20"
                        height="20"
                      /> <span> GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
