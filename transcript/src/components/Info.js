
import contactImage from '../assets/Mask Group (1).png'; 

function App() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <img src={contactImage} alt="sample pics" />
        <div className="contact-text">
          <h1>We provide fast & secure transcript services.</h1>
          <button className="contact">Contact us</button>
        </div>
      </div>
    </section>
  );
}

export default App;
