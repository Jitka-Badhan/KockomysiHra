import React from 'react';
import './style.css';
import { useState } from 'react';
import data from '../../../data';

const Building = () => {
  const [Step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const selectedBuilding = data.buildings[index];
  const [answer, setAnswer] = useState('')

  const buttonClicked = (answer) => {
    setAnswer(answer);
    setStep(2);
  };

  return (
    <div className="card game__building">
      {Step === 0 &&
        <>
          <img src="/assets/cross.svg" className="top-right cancel" />
          <div className="card__content">
            <img src={selectedBuilding.cardImg} alt="empty bar" className="building__img" />
            <div className="building__text">
              <h4>{selectedBuilding.name}</h4>
              {selectedBuilding.description.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="card__buttons">
              <button className="cancel">Zpět na mapu</button>
              <button className="toQuiz" onClick={() => { setStep(1) }}>Přejdi na rébus</button>
            </div>
          </div>
        </>}

      {Step === 1 &&
        <>
          <div className="card game__quizz">
            <img src="/assets/cross.svg" alt="cross" className="top-right cancel" />
            <div className="card__content">
              <div className="container quizz">
                <img
                  src={selectedBuilding.quizz.pic}
                  className="quizz__img"
                />
                <div className="quizz__text">
                  <h4>{selectedBuilding.quizz.text}</h4>
                  <table className="quizz__answers">
                    <tbody>
                      {
                        selectedBuilding.quizz.answers.map(tableCell =>
                          <tr key={tableCell.button} className="answer">
                            <td>
                              <button className="answer__button" onClick={() => { buttonClicked(tableCell) }
                              } >{tableCell.button} {
                                  tableCell.text !== '' ? tableCell.text :
                                    <img
                                      src={tableCell.pic}
                                      className="answer__img catA"
                                    />
                                }</button>
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                  <div className="card__buttons">
                    <button className="cancel" onClick={() => { setStep(0) }}>Zrušit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}

    </div >
  );
};

export default Building;