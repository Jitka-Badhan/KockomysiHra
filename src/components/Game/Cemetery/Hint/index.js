import React from 'react';
import './style.css';

import CrossButton from '../../../CrossButton';

const Hint = ({ quizzToHint, backHome }) => {
  return (
    <div className="card game__hints">
      <CrossButton closeIt={() => backHome()} />
      <img
        src="assets/quizzes/in_cape.png"
        alt="mysterious mouse in hood"
        className="hint__mouse__img"
      />
      <h4>Zde je tvoje nápověda:</h4>
      <div className="hint">
        <h4>{quizzToHint.name}</h4>
        <img src={quizzToHint.hint.pic} className="hint__img" />
        <p>{quizzToHint.hint.text}</p>
      </div>
      <div className="card__buttons">
        <button className="cancel" onClick={() => backHome()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Hint;
