import React from 'react';
import './style.css';

const CrossButton = ({ closeIt }) => (
  <img
    src="../../assets/cross.svg"
    alt="cross"
    className="top-right cancel"
    onClick={closeIt}
  />
);

export default CrossButton;
