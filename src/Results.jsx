import React from 'react';
import './index.css'; // Make sure to create a corresponding CSS file for styling
import cpeImage from './cpe.png'; // Import the image from the src directory

function Results() {
  return (
    <div className="results-container">
      <img src={cpeImage} alt="CPE" className="centered-image" />
      <button className="download-button">Download PDF</button>
    </div>
  );
}

export default Results;