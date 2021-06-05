import React from 'react';
import './style.css';

import Header from '../Header';

const Intro = () => {
  return (
    <>
      <Header />
      <section classNameName="main intro__main">
        <div classNameName="container intro">
          <img
            src="assets/photos/photo-like_rectangle.png"
            alt=""
            classNameName="intro__img"
          />
          <div classNameName="intro__text">
            <p>Bylo kdysi krásné město...</p>
            <p>Kočkomyšen, název, neslo.</p>
            <p>A v něm pěkně pospolu,</p>
            <p>dělili se u stolu</p>
            <p>kočky, myši, kamarádi,</p>
            <p>Tehdy se zde měli rádi.</p>
          </div>
        </div>
        <div classNameName="container intro__buttons">
          <a href="" classNameName="container intro__button">
            <p>Předchozí</p>
            <img
              classNameName="intro__button_img"
              src="/assets/arrow-left.svg"
              alt="arrow icon"
            />
          </a>
          <a href="" classNameName="container intro__button">
            <img
              classNameName="intro__button_img"
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
