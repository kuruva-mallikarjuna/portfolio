import './About.css';
import Nav from '../nav/nav';
export default function About() {
  return (
    <section className="about-section">
      <div className='about-nav'>
        <Nav />
      </div>
      <h2>Education Qualifications</h2>
      <div className="about-container">
        <div className="about-card">
          <h3>B.Tech - ECE</h3>
          <p>CGPA: 7.0 | Year of Passing: 2025</p>
        </div>
        <div className="about-card">
          <h3>Intermediate - MPC</h3>
          <p>Percentage: 60.2% | 2019 - 2021</p>
        </div>
        <div className="about-card">
          <h3>10th Standard</h3>
          <p>CGPA: 8.2 | Year: 2019</p>
        </div>
      </div>
    </section>
  );
}
