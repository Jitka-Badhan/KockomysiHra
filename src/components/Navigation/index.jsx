import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navigation = ({ home, rules, game }) => {
  return (
    <section className="navigation rules__nav">
      {home && (
        <Link to="/">
          <div>
            <img
              className="nav__icon home"
              src="/assets/home.svg"
              alt="home icon"
            />
            <p>Domů</p>
          </div>
        </Link>
      )}
      {rules && (
        <Link to="/rules">
          <div>
            <img className="nav__icon next" alt="next icon" />
            <p>Pravidla</p>
          </div>
        </Link>
      )}
      {game && (
        <Link to="/game">
          <div>
            <img
              className="nav__icon next"
              src="/assets/arrow-next.svg"
              alt="next icon"
            />
            <p>Hra</p>
          </div>
        </Link>
      )}
    </section>
  );
};

export default Navigation;
