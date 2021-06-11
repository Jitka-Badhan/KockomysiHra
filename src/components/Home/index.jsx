import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Footer from '../Footer';
import Form from '../Form';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const openNewGame = () => {
    localStorage.clear();
    setShowForm(true);
  };

  return (
    <>
      <section
        className={showForm ? 'main home__main blurred' : 'main home__main'}
      >
        <h1>Kočkomyší hra</h1>
        <img src="assets/Intro/main_pic.png" alt="" className="home__img" />
        <div className="container home__buttons">
          <Link to="/intro" className="button">
            Intro
          </Link>
          <button className="button" onClick={openNewGame}>
            Nová hra
          </button>
          <Link to="/game" className="button">
            Pokračovat ve hře
          </Link>
        </div>
      </section>

      <Form blurApplied={showForm} toggleForm={setShowForm} />

      <Footer />
    </>
  );
};

export default Home;
