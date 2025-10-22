import './Projects.css';
import Nav from '../nav/nav';

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-nav">
        <Nav />
      </div>

      <h2>My Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A React.js responsive portfolio website showcasing my projects.</p>

          <div className="project-buttons">
            <a 
              href="https://kuruvamallikarjuna-react-project.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
            > Click
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
