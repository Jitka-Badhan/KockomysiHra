import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const GameNav = ({ save }) => {
  return (
    <div className="container navigation game__nav">
      <Link to="/">
        <img
          className="nav__icon home"
          src="/assets/home.svg"
          alt="home icon"
        />
        <p>Domů</p>
      </Link>
      <Link to="/rules">
        <img
          className="nav__icon rules"
          src="/assets/book.svg"
          alt="book icon"
        />
        <p>Pravidla</p>
      </Link>
      <button onClick={() => {
        save()
      }}>
        <img
          className="nav__icon rules"
          src="/assets/bookmark.svg"
          alt="book icon"
        />
        <p>Uložit</p>
      </button>
    </div>
  );
};

export default GameNav;
