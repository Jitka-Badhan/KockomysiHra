import React from 'react';
import './style.css';

const Building = () => {
  return (
    <div className="card game__building">
            <img src="/img/cross.svg" alt="cross" class="top-right cancel">
            <div className="card__content">
              <img src="/img/buildings/bar.jpg" alt="empty bar" className="building__img" />
              <div className="building__text">
                <h4>Hospoda</h4>
                <p>Tohle je místní putyka,</p>
                <p>kočky tu sedí u mlíka.</p>
                <p>Nakaž tu, která žere myši</p>
                <p>a nákaza se prudce zvýší.</p>
              </div>
              <div className="card__buttons">
                <button className="cancel">Zpět na mapu</button>
                <button className="toQuiz">Přejdi na rébus</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Building;