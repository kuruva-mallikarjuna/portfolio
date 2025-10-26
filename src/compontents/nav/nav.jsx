import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <ul className="nav-links">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <li key={item}>
              <Link to={path} className={isActive ? "active" : ""}>
                {item}
              </Link>
            </li>
          );
        })}

        <li>
          <a
            href="/Mallikuruva-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <a
        href="/Mallikuruva-resume.pdf"
        download="Mallikuruva-Resume.pdf"
        className="download-btn"
      >
         Download CV
      </a>
    </nav>
  );
}
