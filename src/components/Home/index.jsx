import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <section className="main home__main">
        <h1>Kočkomyší hra</h1>
        <img src="" alt="" className="home__img" />
        <div className="container home__buttons">
          <Link to="/intro" className="button">
            Intro
          </Link>
          <Link to="/hra" className="button">
            Nová hra
          </Link>
          <Link to="/hra" className="button">
            Pokračovat ve hře
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
