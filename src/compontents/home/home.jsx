import './home.css';
import Img from '../../assets/img.jpg';
import Nav from '../nav/nav';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home">
      <div className="card">

        
        <div className="card-nav">
          <div className="nav-card">
            <Nav />
          </div>
        </div>

        <div className="card-image">
          <img src={Img} alt="Kuruva Mallikarjuna" />
        </div>

      
        <div className="card-content">
          <h3>Hello, I’m <span>Kuruva Mallikarjuna</span></h3>
          <p>
            I specialize in building modern, responsive, and scalable Front-End web
            applications using React.js, JavaScript, and clean UI principles.
          </p>

          
         <h2><div className="social-links">
            <a href="https://github.com/kuruva-mallikarjuna" target="_blank" rel="noopener noreferrer">
              <FaGithub />  
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div></h2>
        </div>
        
      </div>
    </div>
  );
}
