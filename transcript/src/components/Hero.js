
import heroImage from '../assets/image 12.png'; 

function App() {
  return (
    <div className="hero-container">
      <div className="left-info">
        <h1>
          <span>Slide into</span> The New <br />
          School Year
        </h1>
        <p>
          Save time on school transfers and paying <br />
          school fees with this online transcript and <br />
          school fees service.
        </p>

        <button className="get-started">Get Started</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
}

export default App;
