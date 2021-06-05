import React from 'react';
import './style.css';

const Quizz = () => {
  return (
    <div className="card game__quizz">
      <img src="/img/cross.svg" alt="cross" className="top-right cancel" />
      <div className="card__content">
        <div className="container quizz">
          <img
            src="/img/quizzes/quizz1.jpeg"
            alt="quizz from library"
            className="quizz__img"
          />
          <div className="quizz__text">
            <h4>Najdi kočku, co se po studiu setká s nejvíce kočkami.</h4>
            <table className="quizz__answers">
              <tr className="answer">
                <td>
                  <button className="answer__button">A</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_black.png"
                    alt="black cat"
                    className="answer__img catA"
                  />
                </td>
              </tr>
              <tr className="answer">
                <td>
                  <button className="answer__button">B</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_white.png"
                    alt="white cat"
                    className="answer__img catB"
                  />
                </td>
              </tr>
              <tr className="answer">
                <td>
                  <button className="answer__button">C</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_orange.png"
                    alt="ginger cat"
                    className="answer__img catC"
                  />
                </td>
              </tr>
              <tr className="answer">
                <td>
                  <button className="answer__button">C</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_grey.png"
                    alt="grey cat"
                    className="answer__img catD"
                  />
                </td>
              </tr>
            </table>
            <div className="card__buttons">
              <button className="cancel">Zrušit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
