import React from 'react';
import maleImage from '../assets/male.png';
import '../image.css'; 

function Image() {
  return (
    <div className="image-container">
      <div className='image1'>
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
    </div>
  );
}

export default Image;
