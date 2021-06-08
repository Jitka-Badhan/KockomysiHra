import React from 'react';
import './style.css';

const Hint = ({ quizzToHint, backHome }) => {
  return (
    <div className="card game__hints">
      <img src="/img/cross.svg" alt="cross" className="top-right cancel" />
      <img
        src="img/photos/photo-like_square.png"
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
