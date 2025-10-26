import './Projects.css';
import Nav from '../nav/nav';

const projects = [
  {
    title: "E-commerce Website",
    description: "A React.js responsive portfolio website showcasing my projects.",
    link: "https://kuruvamallikarjuna-react-project.netlify.app"
  },
  {
    title: "Netflix Page",
    description: "A React.js responsive portfolio website showcasing my projects.",
    link: "https://kuruva-mallikarjuna-page.netlify.app"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-nav">
        <Nav />
      </div>

      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-buttons">
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
