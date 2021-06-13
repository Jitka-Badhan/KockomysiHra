import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const GameNav = ({ setSelectedBuilding }) => {
  return (
    <div className="container navigation game__nav">
      <Link to="/">
        <img className="icon home" src="/assets/home.svg" alt="home icon" />
        <p>Domů</p>
      </Link>
      <Link to="/rules">
        <img className="icon rules" src="/assets/book.svg" alt="book icon" />
        <p>Pravidla</p>
      </Link>
      <button onClick={() => setSelectedBuilding()}>
        <img className="icon" src="/assets/map_icon.svg" alt="map icon" />
        <p>Mapa</p>
      </button>
    </div>
  );
};

export default GameNav;
