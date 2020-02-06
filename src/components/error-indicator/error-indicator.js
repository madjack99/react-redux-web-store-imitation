import React from 'react';
import errorImage from './error-image.png';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-indicator__image" src={errorImage} alt="error" />
      <div className="error-indicator__text">
        This error was initiated on purpose, please reload the page
      </div>
    </div>
  );
};

export default ErrorIndicator;
