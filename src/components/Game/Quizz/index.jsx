import React from 'react';
import './style.css';

const Quizz = () => {
  return (
    <div class="card game__quizz">
      <img src="/img/cross.svg" alt="cross" class="top-right cancel" />
      <div class="card__content">
        <div class="container quizz">
          <img
            src="/img/quizzes/quizz1.jpeg"
            alt="quizz from library"
            class="quizz__img"
          />
          <div class="quizz__text">
            <h4>Najdi kočku, co se po studiu setká s nejvíce kočkami.</h4>
            <table class="quizz__answers">
              <tr class="answer">
                <td>
                  <button class="answer__button">A</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_black.png"
                    alt="black cat"
                    class="answer__img catA"
                  />
                </td>
              </tr>
              <tr class="answer">
                <td>
                  <button class="answer__button">B</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_white.png"
                    alt="white cat"
                    class="answer__img catB"
                  />
                </td>
              </tr>
              <tr class="answer">
                <td>
                  <button class="answer__button">C</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_orange.png"
                    alt="ginger cat"
                    class="answer__img catC"
                  />
                </td>
              </tr>
              <tr class="answer">
                <td>
                  <button class="answer__button">C</button>
                </td>
                <td>
                  <img
                    src="img/quizzes/cat_grey.png"
                    alt="grey cat"
                    class="answer__img catD"
                  />
                </td>
              </tr>
            </table>
            <div class="card__buttons">
              <button class="cancel">Zrušit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
