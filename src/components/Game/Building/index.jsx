import React from 'react';
import './style.css';

const Building = () => {
  return (
    <div classNameName="card game__building">
            <img src="/img/cross.svg" alt="cross" className="top-right cancel">
            <div classNameName="card__content">
              <img src="/img/buildings/bar.jpg" alt="empty bar" classNameName="building__img" />
              <div classNameName="building__text">
                <h4>Hospoda</h4>
                <p>Tohle je místní putyka,</p>
                <p>kočky tu sedí u mlíka.</p>
                <p>Nakaž tu, která žere myši</p>
                <p>a nákaza se prudce zvýší.</p>
              </div>
              <div classNameName="card__buttons">
                <button classNameName="cancel">Zpět na mapu</button>
                <button classNameName="toQuiz">Přejdi na rébus</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Building;