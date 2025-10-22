import Nav from '../nav/nav';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <div className='skill-nav'>
        <Nav />
      </div>
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card html">HTML</div>
        <div className="skill-card css">CSS</div>
        <div className="skill-card javas">JavaScript</div>
        <div className="skill-card react">React.js</div>
         <div className="skill-card sql">Sql</div>
      </div>
    </section>
  );
}
