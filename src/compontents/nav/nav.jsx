import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="download-btn">Download CV</button>
    </nav>
  );
}
