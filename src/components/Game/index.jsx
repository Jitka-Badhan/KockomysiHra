import React, { useEffect, useState } from 'react';
import './style.css';
import data from '../../data.js';

import Header from '../Header';
import GameNav from './GameNav';
import Inventory from './Inventory';
import Map from './Map';

const Game = () => {
  const [myData, setMyData] = useState(data);
  const [selectedBuilding, setSelectedBuilding] = useState(undefined);
  const [remainingSeconds, setRemainingSeconds] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds(remainingSeconds => {
        if (remainingSeconds <= 0) {
          alert('SMITEC!!!')
          clearInterval(interval)
          return 0;
        }
        return (
          remainingSeconds - 1)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <div className="container game">
        <div className="container game__side">
          <GameNav />
          <Inventory
            myData={myData}
            setSelectedBuilding={setSelectedBuilding}
            remainingSeconds={remainingSeconds}
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
