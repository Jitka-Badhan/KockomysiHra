import React from 'react';
import './style.css';

const Municipal = ({ selectedBuilding, backHome, myData, setMyData }) => {
  const selectedBuildingIndex = myData.buildings.indexOf(selectedBuilding);
  const shoppingMallBuilding = myData.buildings.find(
    (building) => building.name === 'Obchoďák',
  );

  const situation = shoppingMallBuilding.quizz.isSolved ? 1 : 0;

  const activateQuizz = () => {
    setMyData((draft) => {
      draft.buildings[selectedBuildingIndex].quizz.isActive = true;
    });

    backHome();
  };

  const quizzSolvedAndReturn = () => {
    const shoppingMallIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.name === 'Obchoďák'),
    );
    const factoryIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.name === 'Továrna'),
    );
    setMyData((draft) => {
      draft.buildings[selectedBuildingIndex].quizz.isActive = false;
      draft.buildings[selectedBuildingIndex].quizz.isSolved = true;
      draft.buildings[selectedBuildingIndex].isActive = false;
      draft.buildings[shoppingMallIndex].didMutate = false;
      draft.buildings[factoryIndex].isActive = true;
    });

    backHome();
  };

  return (
    <div className="card game__building municipal_house">
      <img src="/img/cross.svg" alt="cross" className="top-right cancel" />
      <div className="card__content">
        {
          <>
            <img
              src={selectedBuilding.cardImg[situation]}
              className="building__img"
            />
            <div className="building__text">
              <h4>{selectedBuilding.name}</h4>
              {selectedBuilding.description[situation].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="card__buttons">
              <button
                className="cancel"
                onClick={situation === 0 ? activateQuizz : quizzSolvedAndReturn}
              >
                Zpět na mapu
              </button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Municipal;
