import React from 'react';
import './style.css';
import { useState } from 'react';

const Building = ({
  selectedBuilding,
  setSelectedBuilding,
  changeR,
  changeTubes,
  myData,
  setMyData,
}) => {
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

  const backHome = () => {
    const thisBuilding = myData.buildings.find(
      (building) => building.name === selectedBuilding.name,
    );
    const thisBuildingIndex = myData.buildings.indexOf(thisBuilding);

    setMyData((draft) => {
      draft.buildings[thisBuildingIndex].quizz.isActive = quizzActive;
      draft.buildings[thisBuildingIndex].quizz.isSolved = quizzSolved;
      draft.buildings[thisBuildingIndex].isActive = buildingActive;
    });

    setSelectedBuilding(undefined);
  };

  const quizzSolvedAndReturn = () => {
    const indicationBuilding = myData.buildings.find(
      (building) => building.belongsTo === selectedBuilding.name,
    );
    const indicationBuildingIndex =
      myData.buildings.indexOf(indicationBuilding);

    setMyData((draft) => {
      indicationBuilding &&
        (draft.buildings[indicationBuildingIndex].isActive = buildingActive);
      indicationBuilding &&
        (draft.buildings[indicationBuildingIndex].quizz.isActive = quizzActive);
    });

    backHome();
  };

  const buttonClicked = (answer) => {
    changeR(answer.points);
    changeTubes();
    setAnswer(answer);
    setQuizzSolved(true);
    setQuizzActive(false);
    setBuildingActive(false);
  };

  return (
    <div className="card game__building">
      {!quizzActive && !quizzSolved && (
        <>
          <img src="/assets/cross.svg" className="top-right cancel" />
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

      {quizzActive && (
        <>
          <div className="card game__quizz">
            <img
              src="/assets/cross.svg"
              alt="cross"
              className="top-right cancel"
            />
            <div className="card__content">
              <div className="container quizz">
                <img src={selectedBuilding.quizz.pic} className="quizz__img" />
                <div className="quizz__text">
                  <h4>{selectedBuilding.quizz.text}</h4>
                  <table className="quizz__answers">
                    <tbody>
                      {selectedBuilding.quizz.answers.map((tableCell) => (
                        <tr key={tableCell.button} className="answer">
                          <td>
                            <button
                              className="answer__button"
                              onClick={() => {
                                buttonClicked(tableCell);
                              }}
                            >
                              {tableCell.button}{' '}
                              {tableCell.text !== '' ? (
                                tableCell.text
                              ) : (
                                <img
                                  src={tableCell.pic}
                                  className="answer__img catA"
                                />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
      {quizzSolved && (
        <>
          {answer.points === 1 && (
            <div className="card game__quizz__result">
              <img
                src="/assets/cross.svg"
                alt="cross"
                className="top-right cancel"
              />
              <img src="assets/quizzes/cat_dead.png" className="result__img" />
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
              <img
                src="/assets/cross.svg"
                alt="cross"
                className="top-right cancel"
              />
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
              <img
                src="/assets/cross.svg"
                alt="cross"
                className="top-right cancel"
              />
              <img src="assets/quizzes/cat_sick.png" className="result__img" />
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
    </div>
  );
};

export default Building;
