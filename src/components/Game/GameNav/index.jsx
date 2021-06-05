import React from 'react';
import './style.css';

const GameNav = () => {
  return (
    <div className="container navigation game__nav">
      <a href="/domu.html">
        <img
          className="nav__icon home"
          src="/assets/home.svg"
          alt="home icon"
        />
        <p>Domů</p>
      </a>
      <a href="/pravidla.html">
        <img
          className="nav__icon rules"
          src="/assets/book.svg"
          alt="book icon"
        />
        <p>Pravidla</p>
      </a>
      <a href="">
        <img
          className="nav__icon rules"
          src="/assets/bookmark.svg"
          alt="book icon"
        />
        <p>Uložit</p>
      </a>
    </div>
  );
};

export default GameNav;
