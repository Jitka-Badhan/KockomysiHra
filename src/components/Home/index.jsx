import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <section classNameName="main home__main">
        <h1>Kočkomyší hra</h1>
        <img
          src="assets/photos/photo-like_rectangle.png"
          alt=""
          classNameName="home__img"
        />
        <div classNameName="container home__buttons">
          <Link to="/intro" classNameName="button">
            Intro
          </Link>
          <Link to="/game" classNameName="button">
            Nová hra
          </Link>
          <Link to="/game" classNameName="button">
            Pokračovat ve hře
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
