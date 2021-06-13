import React from 'react';
import './style.css';

import CrossButton from '../../../CrossButton';

const Milk = ({ setSelectedBuilding }) => {
  return (
    <div className="card game__specialItem">
      <CrossButton closeIt={() => setSelectedBuilding()} />
      <h4>V budově jsi něco našel:</h4>
      <img src="../../../assets/milk.png" className="specialItem__img" />
      <div className="specialItem__text">
        <p>Speciální limitovaná edice kondenzovaného mléka.</p>
        <p>Toto 25 let zrající mléko je vyráběné v Japonsku z mléka krav Wagyu.</p>
        <p>Je zpracováno podle tradičního receptu kočičího mistra Hikari-Čiči-Hina.</p>
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
