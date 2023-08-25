import logoImage from "../assets/logo 1.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-scroll";
// import SignIn from "../pages/SignIn";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul>
        <li className="nav-item">
          <ScrollLink to="/" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="service" spy={true} smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="about" spy={true} smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="testimonial" spy={true} smooth={true} duration={500}>
           Testimonial
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </li>
      </ul>

      <div className="right-nav">
        <button className="login">
        <RouterLink to="/signin">Login</RouterLink>
        </button>
        <button className="signup">
          <a href="/signUp">Sign Up Now</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
