import React, { useState } from 'react';
import './style.css';

import Hint from './Hint';
import CrossButton from '../../CrossButton';
import Magnifier from '../../Magnifier';

const Cemetery = ({
  selectedBuilding,
  remainingSeconds,
  setRemainingSeconds,
  backHome,
  myData,
  setMyData,
  magnify,
  toggleMagnify,
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
    );
    setQuizzToHint(hintFor.quizz);
    setHintWasChosen(true);
    !hintFor.quizz.hint.isActive && setRemainingSeconds(remainingSeconds - 300);
    !hintFor.quizz.hint.isActive &&
      setMyData((draft) => {
        draft.buildings[
          myData.buildings.indexOf(hintFor)
        ].quizz.hint.isActive = true;
      });

    console.log(hintFor.quizz.hint.isActive);
  };

  return (
    <>
      {!magnify && (
        <div className="card game__cemetery">
          {!visited && !hintWasChosen && (
            <>
              <CrossButton closeIt={() => backHome()} />
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
              <CrossButton closeIt={() => backHome()} />
              <div className="card__content">
                <img
                  src="assets/buildings/cemetery_inside2.jpg"
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
            <Hint
              quizzToHint={quizzToHint}
              backHome={backHome}
              toggleMagnify={toggleMagnify}
            />
          )}
        </div>
      )}
      {magnify && (
        <Magnifier
          imgToMagnify={quizzToHint.hint.pic}
          toggleMagnify={toggleMagnify}
        />
      )}
    </>
  );
};

export default Cemetery;
