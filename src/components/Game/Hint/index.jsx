import React from 'react';
import './style.css';

const Hint = () => {
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
        <h4>Knihovna</h4>
        <img
          src="img/quizzes/hint_bar.png"
          alt="hint for quizz of bar"
          className="hint__img"
        />
        <p>Každý obrázek reprezentuje jeden znak.</p>
      </div>
      <div className="card__buttons">
        <button className="cancel">Ok</button>
      </div>
    </div>
  );
};

export default Hint;
