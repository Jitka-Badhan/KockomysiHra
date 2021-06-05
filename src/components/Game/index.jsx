import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import './style.css';
import data from '../../data.js';

import Header from '../Header';
import GameNav from './GameNav';
import Inventory from './Inventory';
import Map from './Map';

const Game = () => {
  const [myData, setMyData] = useImmer(data);
  const [selectedBuilding, setSelectedBuilding] = useState(undefined);

  return (
    <>
      <Header />

      <div className="container game">
        <div className="container game__side">
          <GameNav />
          <Inventory
            myData={myData}
            setSelectedBuilding={setSelectedBuilding}
          />
        </div>

        <div className="main game__main">
          <Map
            selectedBuilding={selectedBuilding}
            setSelectedBuilding={setSelectedBuilding}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
