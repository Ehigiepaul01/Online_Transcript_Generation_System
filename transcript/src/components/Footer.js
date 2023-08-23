import logoImage from "../assets/Logo.png";

function App() {
  return (
    <footer>
      <div className="footer-container" id="contact">
      <img src={logoImage} alt="Brand logo" />
        <hr />

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#service">Service</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-links">
          <ul>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>

            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>

            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>

            <li>
              <i className="fa-brands fa-whatsapp"></i>
            </li>

            <li>
              <i className="fa-brands fa-telegram"></i>
            </li>
          </ul>
        </div>

        <p>Copyright &copy; 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default App;
