import React from 'react';
import './style.css';

import CrossButton from '../CrossButton';

const Magnifier = ({ imgToMagnify, toggleMagnify }) => {
  return (
    <div className="pop-up">
      <CrossButton closeIt={toggleMagnify} />
      <img src={imgToMagnify} className="magnified_pic" />
    </div>
  );
};

export default Magnifier;
