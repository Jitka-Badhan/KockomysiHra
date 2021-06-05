import React from 'react';
import './style.css';

const Indication = () => {
  return (
    <div class="card game__indication">
      <img src="/img/cross.svg" alt="cross" class="top-right cancel" />
      <h4>V budově byla schována indicie</h4>
      <img
        src="img/quizzes/books.png"
        alt="pile of books"
        class="indication__img"
      />
      <div class="indication__text">
        <p>Vítáme Tě mezi námi,</p>
        <p>jedna rada je tu k mání.</p>
        <p>Chceš-li se na konec dostat,</p>
        <p>musíš se od konce dívat.</p>
      </div>
      <div class="card__buttons">
        <button class="cancel">Ok</button>
      </div>
    </div>
  );
};

export default Indication;
