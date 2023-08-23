
import maleImage from '../assets/male.png'; 

function Image() {
  return (
    <div className="image">
      <img src={maleImage} alt="image" />
      <div className="text">
        <h2 className="bottom1">
          Online School Payment <br />
          Services
        </h2>
        <p className="bottom2">
          Roam provides fast & secure online school payment <br />
          services
        </p>
      </div>
    </div>
  );
}

export default Image;
