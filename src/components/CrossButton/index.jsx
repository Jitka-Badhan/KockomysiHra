import React from 'react';
import './style.css';

const CrossButton = ({ closeIt }) => (
  <div className="cross_button" onClick={closeIt}>
    <img
      src="../../assets/cross.svg"
      alt="cross"
      className="top-right cancel"
    />
  </div>
);

export default CrossButton;
