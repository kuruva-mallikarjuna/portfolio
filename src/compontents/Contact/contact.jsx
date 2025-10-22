import Img from '../../assets/img.jpg';
import './Contact.css'; 
import Nav from '../nav/nav';

export default function Contact() {
  return (
    <section className="contact-section">
    
      <div className="contact-nav">
        <Nav />
      </div>

      
      <div className="contact-image">
        <img src={Img} alt="Profile of Kuruva Mallikarjuna" />
      </div>

      
      <h2>Contact Me</h2>

    
      <div className="contact-details">
        <p><strong>Email:</strong> kuruvamalli860@gmail.com</p>
        <p><strong>Phone:</strong> +91 8886812286</p>
        <p><strong>Location:</strong> Pattikonda, India</p>
      </div>
    </section>
  );
}
