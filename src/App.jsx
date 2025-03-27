import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";

const App = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();

    // Initialize Typed.js
    const typed = new Typed(".auto-type", {
      strings: ["Software Engineer", "DJ", "Student", "Problem Solver"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home">
      <nav className="navbar navbar-expand-lg p-0 sticky-top" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">CA</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid text-center py-5" data-aos="fade-up">
        <h1>Chris Alpuerto</h1>
        <p>Hi</p>
        <h2 className="mt-3">
          I am a <span className="auto-type text-primary"></span>
        </h2>
      </div>
      

      <div className="container py-5" id="about" data-aos="fade-right">
        <h3>About Me</h3>
        <p>
          Hi, I'm Chris — a student at California State University, Fullerton
          pursuing Computer Science with a deep passion for technology, music,
          and creative innovation. Whether it's coding new solutions or mixing
          tracks, I love making things that connect with people.
        </p>
      </div>

      <div className="container py-5" id="education" data-aos="fade-left">
        <h3>Education</h3>
        <ul>
          <li><strong>School:</strong> California State University, Fullerton</li>
          <li><strong>Major:</strong> Computer Science</li>
          <li><strong>GPA:</strong> 3.8</li>
        </ul>
      </div>

      <div className="container py-5" id="contact" data-aos="fade-up">
        <h3>Contact Me</h3>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/chris-alpuerto" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/chrisalpuerto" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:chrisalpuerto@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;