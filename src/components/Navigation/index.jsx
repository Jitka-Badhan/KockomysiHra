import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <section className="navigation rules__nav">
      <Link to="/">
        <img
          className="nav__icon home"
          src="/assets/home.svg"
          alt="home icon"
        />
        <p>Domů</p>
      </Link>
      <Link to="/game">
        <img
          className="nav__icon next"
          src="/assets/arrow-next.svg"
          alt="next icon"
        />
        <p>Hra</p>
      </Link>
    </section>
  );
};

export default Navigation;
