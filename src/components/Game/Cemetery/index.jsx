import React from 'react';
import './style.css';
import { useState } from 'react';

const Cemetery = ({ myData, selectedBuilding, backHome }) => {

  const [Step, setStep] = useState(0);
  console.log(selectedBuilding);

  return (
    <div className="card game__cemetery">
      {selectedBuilding.visited === false && (
        <>
          <img src="/assets/cross.svg" alt="cross" className="top-right cancel" />
          <div className="card__content">
            <img
              src="assets/buildings/cemetery.jpg"
              className="cemetery__img"
            />
            <div className="cemetery__text">
              <h4>{selectedBuilding.name}</h4>
              <div className="container">
                <div>
                  {selectedBuilding.description1.map((text) => (
                    <p key={text}>{text}</p>))}
                </div>
                <div>
                  {selectedBuilding.description2.map((text) => (
                    <p key={text}>{text}</p>))}
                </div>
              </div>
            </div>
            <div className="cemetery__buttons">
              <img
                src="assets/buildings/library_icon.png"
                alt="library"
                className="cemetery__button building__detail"
              />
              <img
                src="assets/buildings/shopping_mall_icon.png"
                alt="shopping mall"
                className="cemetery__button building__detail"
              />
              <img
                src="assets/buildings/factory_icon.png"
                alt="factory"
                className="cemetery__button building__detail"
              />
              <img
                src="assets/buildings/park_icon.png"
                alt="park with pond and bridge"
                className="cemetery__button building__detail"
              />
              <img
                src="assets/buildings/bar_icon.png"
                alt="bar"
                className="cemetery__button building__detail"
              />
            </div>
            <div className="card__buttons">
              <button className="cancel" onClick={() => backHome()}>Zrušit</button>
            </div>
          </div>
        </>
      )
      }
    </div>
  );
};

export default Cemetery;
