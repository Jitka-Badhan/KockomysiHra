import React from 'react';
import './style.css';

import CrossButton from '../../../CrossButton';

const AccessDenied = ({ setSelectedBuilding }) => {
  return (
    <div className="card game__accessDenied">
      <CrossButton closeIt={() => setSelectedBuilding()} />
      <h4>Na budově visí tabulka:</h4>
      <img
        src="../../../../assets/access_denied.png"
        className="accessDenied__img"
      />
      <div className="accessDenied__text">
        <p>Nepovolaným vstup zakázán.</p>
        <p>
          Přestože ses zamlada učil zámečníkem, dovnitř se nedostaneš. Kočky
          vstup zabezpečily elektronickým přístupovým systémem.
        </p>
      </div>
      <div className="card__buttons">
        <button className="cancel" onClick={() => setSelectedBuilding()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
