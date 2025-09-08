import React from "react";
import { FaLaptopCode, FaDatabase, FaPalette } from "react-icons/fa";
import "../styles/Expertise.css"; 

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      {/* Section Title */}
      <h2 className="expertise-title">// My Expertise</h2>

      {/* Expertise Grid */}
      <div className="container">
        <div className="row g-4">
          
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="expertise-card">
              <FaLaptopCode className="expertise-icon text-warning" />
              <h3>Full Stack <span>Development</span></h3>
              <p>
                Built projects using <b>Python (Flask)</b>, <b>React</b>, 
                <b> MySQL</b>, HTML, CSS, and Bootstrap. 
                Experienced in CRUD apps & authentication systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="expertise-card">
              <FaDatabase className="expertise-icon text-success" />
              <h3>Backend <span>APIs</span></h3>
              <p>
                Implemented REST APIs with <b>Flask</b> and <b>MySQL</b>, 
                including authentication, data handling, and secure CRUD operations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="expertise-card">
              <FaPalette className="expertise-icon text-danger" />
              <h3>Frontend <span>Design</span></h3>
              <p>
                Passionate about responsive, user-friendly interfaces using 
                <b> React</b>, <b>Bootstrap</b>, and custom CSS for modern web apps.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
