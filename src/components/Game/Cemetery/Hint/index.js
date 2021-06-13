import React from 'react';
import './style.css';

import CrossButton from '../../../CrossButton';

const Hint = ({ quizzToHint, backHome, toggleMagnify }) => {
  return (
    <div className="card game__hints">
      <CrossButton closeIt={() => backHome()} />
      <img
        src="assets/quizzes/in_cape.png"
        alt="mysterious mouse in hood"
        className="hint__mouse__img"
      />
      <h4 className="hint__title">Zde je tvoje nápověda:</h4>
      <div className="hint">
        <h4>{quizzToHint.name}</h4>
        <img src={quizzToHint.hint.pic} className="hint__img" />
        <img
          src="../../../assets/magnifier.svg"
          className="magnifier__button"
          onClick={toggleMagnify}
        />
        <p className="hint_text_hint">{quizzToHint.hint.text}</p>
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
