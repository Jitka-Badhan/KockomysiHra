import React from 'react';
import './style.css';

const Navigation = () => {
  return (
    <section className="navigation rules__nav">
      <a href="/domu.html">
        <img
          className="nav__icon home"
          src="/assets/home.svg"
          alt="home icon"
        />
        <p>Domů</p>
      </a>
      <a href="/hra.html">
        <img
          className="nav__icon next"
          src="/assets/arrow-next.svg"
          alt="next icon"
        />
        <p>Hra</p>
      </a>
    </section>
  );
};

export default Navigation;
