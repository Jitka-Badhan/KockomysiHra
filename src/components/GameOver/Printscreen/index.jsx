import React from 'react';

import './style.css';

const Printscreen = ({ myNewImgUrl }) => {
  return (
    <>
      <img src={myNewImgUrl} className="printscreen" />
    </>
  );
};

export default Printscreen;
