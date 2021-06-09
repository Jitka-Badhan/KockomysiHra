import React from 'react';
import './style.css';

import CrossButton from '../../../CrossButton';

const Milk = ({ setSelectedBuilding }) => {
  return (
    <div className="card game__specialItem">
      <CrossButton closeIt={() => setSelectedBuilding()} />
      <h4>V budově jsi něco našel</h4>
      <img src="../../../assets/milk.png" className="specialItem__img" />
      <div className="specialItem__text">
        <p>Kočky tu nechaly plechovku se sladkým kondenzovaným mlékem.</p>
      </div>
      <div className="card__buttons">
        <button className="cancel" onClick={() => setSelectedBuilding()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Milk;
