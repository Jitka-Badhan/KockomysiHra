import React from 'react';
import './style.css';

import Header from '../Header';

const Intro = () => {
  return (
    <>
      <Header />
      <section className="main intro__main">
        <div className="container intro">
          <img
            src="assets/photos/photo-like_rectangle.png"
            alt=""
            className="intro__img"
          />
          <div className="intro__text">
            <p>Bylo kdysi krásné město...</p>
            <p>Kočkomyšen, název, neslo.</p>
            <p>A v něm pěkně pospolu,</p>
            <p>dělili se u stolu</p>
            <p>kočky, myši, kamarádi,</p>
            <p>Tehdy se zde měli rádi.</p>
          </div>
        </div>
        <div className="container intro__buttons">
          <a href="" className="container intro__button">
            <p>Předchozí</p>
            <img
              className="intro__button_img"
              src="/assets/arrow-left.svg"
              alt="arrow icon"
            />
          </a>
          <a href="" className="container intro__button">
            <img
              className="intro__button_img"
              src="/assets/arrow-right.svg"
              alt="arrow icon"
            />
            <p>Následující</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Intro;
