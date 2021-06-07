import React from 'react';
import './style.css';

const House = ({selectedBuilding, backHome}) => {

  return (
    <>
    <img
            src="/assets/cross.svg"
            alt="cross"
            className="top-right cancel"
          />
          <div className="card__content">
            <img
              src="assets/buildings/house_modern.jpg"
              className="cemetery__img"
            />
            <div className="cemetery__text">
              <h4>{selectedBuilding.name}</h4>
              <div className="container">
                <div>
                <img
                  src="assets/quizzes/hint_pub.jpg"
                  className="cemetery__img"
                />
                </div>
              </div>
            </div>
            <div className="card__buttons">
              <button className="cancel" onClick={() => backHome()}>
                Zrušit
              </button>
            </div>
          </div>
    </>
  );
};

export default House;