import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "01", label: "home", href: "#home" },
    { id: "02", label: "expertise", href: "#expertise" },
    { id: "03", label: "work", href: "#work" },
    { id: "04", label: "career-objective", href: "#career-objective" },
    { id: "05", label: "contact", href: "#contact" },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop - 80 <= window.scrollY &&
          section.offsetTop + section.offsetHeight - 80 > window.scrollY
        ) {
          setActiveSection(navItems[index].label);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar-container">
      <div className="logo">
        <span className="name">
          Santhosh<span className="highlight">Kumar</span>.
          <span className="cursor">_</span>
        </span>
      </div>

      {/* Hamburger*/}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={activeSection === item.label ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-index">{item.id}</span> // {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
