import React from 'react';
import rectangleImage from '../asstes/Rectangle 248.png';

function InfoCard() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={rectangleImage} alt="card" />
        <h3>Total Number of Transaction</h3>
        <h1>0</h1>
      </div>

      <div className="card">
        <img src={rectangleImage} alt="card" />
        <h3>Total Value of Transaction</h3>
        <h1>NGN 0</h1>
      </div>

      <button className="apply-button">Apply for Transcript</button>
    </div>
  );
}

export default InfoCard;
