import React from 'react';
import './style.css';

import CrossButton from '../../CrossButton';

const House = ({
  selectedBuilding,
  setSelectedBuilding,
  myData,
  setMyData,
}) => {
  const backHome = () => {
    const thisBuilding = myData.buildings.find(
      (building) => building.name === selectedBuilding.name,
    );
    const thisBuildingIndex = myData.buildings.indexOf(thisBuilding);

    setMyData((draft) => {
      draft.buildings[thisBuildingIndex].quizz.isActive = true;
    });

    setSelectedBuilding(undefined);
  };

  return (
    <div className="card game__indication">
      <CrossButton closeIt={backHome} />
      <h4>{selectedBuilding.name}</h4>
      <img src={selectedBuilding.cardImg} className="building__img" />
      <img src={selectedBuilding.hintImg} className="indication__img" />
      <div className="indication__text">
        {selectedBuilding.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="card__buttons">
        <button className="cancel" onClick={backHome}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default House;
