
import aboutImage from '../assets/Mask-Group.png'; 

function App() {
  return (
    <div className="about-container">
      <div className="left-section">
        <img src={aboutImage} alt="" />
      </div>

      <div className="about-text">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipisicing elit. <br />
          Minus dolorum sequi accusantium excepturi veritatis <br />
          aliquam corporis quos, veniam ad libero?
        </p>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipisicing elit. <br />
          Minus dolorum sequi accusantium excepturi veritatis <br />
          aliquam corporis quos, veniam ad libero?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Modi, expedita!
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
}

export default App;
