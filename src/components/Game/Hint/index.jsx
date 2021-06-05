import React from 'react';
import './style.css';

const Hint = () => {
  return (
    <div class="card game__hints">
      <img src="/img/cross.svg" alt="cross" class="top-right cancel" />
      <img
        src="img/photos/photo-like_square.png"
        alt="mysterious mouse in hood"
        class="hint__mouse__img"
      />
      <h4>Zde je tvoje nápověda:</h4>
      <div class="hint">
        <h4>Knihovna</h4>
        <img
          src="img/quizzes/hint_bar.png"
          alt="hint for quizz of bar"
          class="hint__img"
        />
        <p>Každý obrázek reprezentuje jeden znak.</p>
      </div>
      <div class="card__buttons">
        <button class="cancel">Ok</button>
      </div>
    </div>
  );
};

export default Hint;
