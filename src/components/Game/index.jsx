import React from 'react';
import './style.css';

import Header from '../Header';
import GameNav from './GameNav';
import Inventory from './Inventory';
import Card from './Card';

const Game = () => {
  return (
    <>
      <Header />

      <div className="container game">
        <div className="container game__side">
          <GameNav />
          <Inventory />
        </div>
      </div>

      <div className="main game__main">
        <Card />
      </div>
    </>
  );
};

export default Game;
