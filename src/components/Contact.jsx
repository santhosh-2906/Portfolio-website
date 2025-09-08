import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const email = import.meta.env.VITE_EMAIL;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">// Contact Me</h2>
      <p className="contact-intro">
        I am actively seeking opportunities to contribute as a Python Full Stack Developer. 
        You can connect with me via email, GitHub, or LinkedIn for professional inquiries or collaboration.
      </p>

      <div className="contact-links">
        <a href={`mailto:${email}`}>
          📧 {email}
        </a>

        <a href={github} target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width="24"
            height="24"
            className="contact-icon"
          />
          GitHub
        </a>

        <a href={linkedin} target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            width="24"
            height="24"
            className="contact-icon"
          />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
