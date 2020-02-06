import React from 'react';
import spinner from './infinity.png';

import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img className="spinner" src={spinner} alt="spinner"></img>
    </div>
  );
};

export default Spinner;
