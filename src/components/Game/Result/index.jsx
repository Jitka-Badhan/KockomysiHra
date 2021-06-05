import React from 'react';
import './style.css';

const Result = () => {
  return (
    <div className="card game__quizz__result result--right">
      <img src="/img/cross.svg" alt="cross" className="top-right cancel" />
      <img
        src="img/quizzes/cat_dead.png"
        alt="dead ginger cat"
        className="result__img"
      />
      <div className="result__text">
        <h4>Bravo!</h4>
        <p>Zde kočky už nezachlastají.</p>
        <p>
          R se zvyšuje o <strong>0.5.</strong>.
        </p>
      </div>
      <div className="card__buttons">
        <button className="cancel">Ok</button>
      </div>
    </div>
  );
};

export default Result;
