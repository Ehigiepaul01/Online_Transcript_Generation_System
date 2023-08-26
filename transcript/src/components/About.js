import aboutImage from "../assets/Mask-Group.png";

function App() {
  return (
    <div className="about-container" id="about">
      <div className="left-section">
        <img src={aboutImage} alt="" />
      </div>

      <div className="about-text">
        <h4>About Us</h4>
        <p>
          We are an exceptional platform, <br />
          providing an exclusive service. <br />
        </p>
        <p>
          We make life easy for you, and provide <br />
          you with a wonderful experience. <br />
          We make the journey of your greatness <br />
          come to reality
        </p>
        <p>
          By providing you access to your transcripts in few <br />
          minutes without having to leave your comfort zone!
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
}

export default App;
