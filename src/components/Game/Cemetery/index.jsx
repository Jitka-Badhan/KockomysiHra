import React, { useState } from 'react';
import './style.css';

import Hint from './Hint';

const Cemetery = ({
  selectedBuilding,
  remainingSeconds,
  setRemainingSeconds,
  backHome,
  myData,
  setMyData,
}) => {
  const [visited, setVisited] = useState(selectedBuilding.visited);
  const [hintWasChosen, setHintWasChosen] = useState(false);
  const [quizzToHint, setQuizzToHint] = useState(undefined);

  const approveVisited = () => {
    const thisBuildingIndex = myData.buildings.indexOf(selectedBuilding);

    setMyData((draft) => {
      draft.buildings[thisBuildingIndex].visited = true;
    });

    setVisited(true);
  };

  const showTheHint = (e) => {
    const hintFor = myData.buildings.find(
      (building) => building.name === e.target.id,
    ).quizz;
    setQuizzToHint(hintFor);
    setHintWasChosen(true);
    setRemainingSeconds(remainingSeconds - 300);
  };

  return (
    <div className="card game__cemetery">
      {!visited && !hintWasChosen && (
        <>
          <img
            src="/assets/cross.svg"
            alt="cross"
            className="top-right cancel"
          />
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
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <div>
                  {selectedBuilding.description2.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="card__buttons">
              <button className="cancel" onClick={() => backHome()}>
                Zrušit
              </button>
              <button className="cancel" onClick={approveVisited}>
                Nápověda
              </button>
            </div>
          </div>
        </>
      )}

      {visited && !hintWasChosen && (
        <>
          <img
            src="/assets/cross.svg"
            alt="cross"
            className="top-right cancel"
          />
          <div className="card__content">
            <img
              src="assets/buildings/cemetery.jpg"
              className="cemetery__img"
            />
            <div className="cemetery__text">
              <h4>{selectedBuilding.name}</h4>
              <div className="container">
                <div>
                  {selectedBuilding.description3.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="cemetery__buttons">
              {myData.buildings
                .filter((building) => building.sort === 'Riddle')
                .map((item) => (
                  <img
                    key={item.name}
                    id={item.name}
                    src={item.mapImg}
                    className={
                      item.quizz.isActive
                        ? 'cemetery__button building__detail'
                        : 'cemetery__button building__detail inactive'
                    }
                    onClick={showTheHint}
                  />
                ))}
            </div>
            <div className="card__buttons">
              <button className="cancel" onClick={() => backHome()}>
                Zrušit
              </button>
            </div>
          </div>
        </>
      )}
      {visited && hintWasChosen && (
        <Hint quizzToHint={quizzToHint} backHome={backHome} />
      )}
    </div>
  );
};

export default Cemetery;
