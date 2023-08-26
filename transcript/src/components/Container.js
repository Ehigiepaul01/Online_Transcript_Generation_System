import React from 'react';
import groupImage from '../assets/Group.png';

function TranscriptContainer() {
  return (
    <div className="transcript-container">
      <div className="transcript">
        <img src={groupImage} alt="image" />
        <h5>No transaction yet</h5>
        <p>Once you perform a transaction, it'll show here</p>
        <button className="apply-button">Apply for Transcript</button>
      </div>
    </div>
  );
}

export default TranscriptContainer;
