import React from 'react';
import './style.css';
import { useState } from 'react';

import Milk from './Milk';
import CrossButton from '../../CrossButton';
import Magnifier from '../../Magnifier';

const Building = ({
  selectedBuilding,
  setSelectedBuilding,
  changeR,
  changeTubes,
  magnify,
  toggleMagnify,
  myData,
  setMyData,
}) => {
  const selectedBuildingIndex = myData.buildings.indexOf(selectedBuilding);

  const [quizzActive, setQuizzActive] = useState(
    selectedBuilding.quizz.isActive,
  );
  const [quizzSolved, setQuizzSolved] = useState(
    selectedBuilding.quizz.isSolved,
  );
  const [buildingActive, setBuildingActive] = useState(
    selectedBuilding.isActive,
  );
  const [answer, setAnswer] = useState('');
  const [pointsRecieved, setPointsRecieved] = useState(0);
  const [specialItem, setSpecialItem] = useState(false);

  const backHome = () => {
    setMyData((draft) => {
      draft.buildings[selectedBuildingIndex].quizz.isActive = quizzActive;
      draft.buildings[selectedBuildingIndex].quizz.isSolved = quizzSolved;
      draft.buildings[selectedBuildingIndex].isActive = buildingActive;
    });

    selectedBuilding.name !== 'Obchoďák' || !quizzSolved
      ? setSelectedBuilding()
      : setSpecialItem(true);
  };

  const quizzSolvedAndReturn = () => {
    const indicationBuilding = myData.buildings.find(
      (building) => building.belongsTo === selectedBuilding.name,
    );
    const indicationBuildingIndex =
      myData.buildings.indexOf(indicationBuilding);

    changeR(pointsRecieved);
    changeTubes();

    setMyData((draft) => {
      indicationBuilding &&
        (draft.buildings[indicationBuildingIndex].isActive = buildingActive);
      indicationBuilding &&
        (draft.buildings[indicationBuildingIndex].quizz.isActive = quizzActive);
      indicationBuilding &&
        (draft.buildings[indicationBuildingIndex].quizz.isSolved = quizzSolved);
      selectedBuilding.name === 'Obchoďák' &&
        (draft.buildings[selectedBuildingIndex].didMutate = true);
    });

    backHome();
  };

  const buttonClicked = (answer) => {
    setPointsRecieved(answer.points);
    setAnswer(answer);
    setQuizzSolved(true);
    setQuizzActive(false);
    setBuildingActive(false);
  };

  return (
    <>
      {!magnify && (
        <div className="card game__building">
          {!quizzActive && !quizzSolved && (
            <>
              <CrossButton closeIt={backHome} />
              <div className="card__content">
                <img src={selectedBuilding.cardImg} className="building__img" />
                <div className="building__text">
                  <h4>{selectedBuilding.name}</h4>
                  {selectedBuilding.description.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <div className="card__buttons">
                  <button className="cancel" onClick={backHome}>
                    Zpět na mapu
                  </button>
                  <button
                    className="toQuiz"
                    onClick={() => {
                      setQuizzActive(true);
                    }}
                  >
                    Přejdi na rébus
                  </button>
                </div>
              </div>
            </>
          )}
          {quizzActive && !quizzSolved && (
            <>
              <div className="card game__quizz">
                <CrossButton closeIt={backHome} />
                <div className="card__content">
                  <div className="container quizz">
                    <div className="quizz__imgs">
                      <img
                        src={selectedBuilding.quizz.pic}
                        className="quizz__img"
                      />
                      <img
                        src="../../../assets/magnifier.svg"
                        className="magnifier__button"
                        onClick={toggleMagnify}
                      />
                    </div>
                    <div className="quizz__text">
                      <h4>{selectedBuilding.quizz.text}</h4>
                      <div className="quizz__answers">
                        <div>
                          {selectedBuilding.quizz.answers.map((tableCell) => (
                            <div key={tableCell.button} className="answer">
                              <button
                                className="answer__button"
                                onClick={() => {
                                  buttonClicked(tableCell);
                                }}
                              >
                                {/* {tableCell.button}{' '} */}
                                {tableCell.text !== '' ? (
                                  tableCell.text
                                ) : (
                                  <img
                                    src={tableCell.pic}
                                    className="answer__img"
                                  />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="card__buttons">
                        <button className="cancel" onClick={backHome}>
                          Zrušit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {quizzSolved && !specialItem && (
            <>
              {answer.points === 1 && (
                <div className="card game__quizz__result">
                  <CrossButton closeIt={quizzSolvedAndReturn} />
                  <img
                    src="assets/quizzes/cat_dead.png"
                    className="result__img"
                  />
                  <div className="result__text">
                    <h4>Bravo!</h4>
                    <p></p>
                    <p>{answer.finished}</p>
                    <p></p>
                    <p>
                      Tvé R se zvyšuje o <strong>1</strong>.
                    </p>
                  </div>
                  <div className="card__buttons">
                    <button className="cancel" onClick={quizzSolvedAndReturn}>
                      Ok
                    </button>
                  </div>
                </div>
              )}
              {answer.points === 0 && (
                <div className="card game__quizz__result">
                  <CrossButton closeIt={quizzSolvedAndReturn} />
                  <img
                    src="assets/quizzes/cat_healthy.png"
                    className="result__img"
                  />
                  <div className="result__text">
                    <h4>Špatně...</h4>
                    <p></p>
                    <p>{answer.finished}</p>
                    <p></p>
                    <p>
                      Tvé R se zvyšuje o <strong>0</strong> bodů.
                    </p>
                  </div>
                  <div className="card__buttons">
                    <button className="cancel" onClick={quizzSolvedAndReturn}>
                      Ok
                    </button>
                  </div>
                </div>
              )}
              {answer.points !== 0 && answer.points !== 1 && (
                <div className="card game__quizz__result">
                  <CrossButton closeIt={quizzSolvedAndReturn} />
                  <img
                    src="assets/quizzes/cat_sick.png"
                    className="result__img"
                  />
                  <div className="result__text">
                    <h4>Mohlo to být lepší...</h4>
                    <p></p>
                    <p>{answer.finished}</p>
                    <p></p>
                    <p>
                      Tvé R se zvyšuje o <strong>{answer.points}</strong> bodů.
                    </p>
                  </div>
                  <div className="card__buttons">
                    <button className="cancel" onClick={quizzSolvedAndReturn}>
                      Ok
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          {specialItem && <Milk setSelectedBuilding={setSelectedBuilding} />}
        </div>
      )}
      {magnify && (
        <Magnifier
          imgToMagnify={selectedBuilding.quizz.pic}
          toggleMagnify={toggleMagnify}
        />
      )}
    </>
  );
};

export default Building;
