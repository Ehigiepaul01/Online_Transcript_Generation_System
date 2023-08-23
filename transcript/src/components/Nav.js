import logoImage from "../assets/logo 1.png";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul>
        <li className="nav-item">
          <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="service" spy={true} smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="testimonial" spy={true} smooth={true} duration={500}>
           Testimonial
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="right-nav">
        <button className="btn-sign-in">
          <a href="transcript-sign-in.html">Log in</a>
        </button>
        <button className="btn-sign-up">
          <a href="sign-up.html">Sign Up Now</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
