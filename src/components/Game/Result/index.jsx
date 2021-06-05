import React from 'react';
import './style.css';

const Result = () => {
  return (
    <div class="card game__quizz__result result--right">
      <img src="/img/cross.svg" alt="cross" class="top-right cancel" />
      <img
        src="img/quizzes/cat_dead.png"
        alt="dead ginger cat"
        class="result__img"
      />
      <div class="result__text">
        <h4>Bravo!</h4>
        <p>Zde kočky už nezachlastají.</p>
        <p>
          R se zvyšuje o <strong>0.5.</strong>.
        </p>
      </div>
      <div class="card__buttons">
        <button class="cancel">Ok</button>
      </div>
    </div>
  );
};

export default Result;
