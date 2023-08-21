import logoImage from "../assets/logo 1.png";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
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
