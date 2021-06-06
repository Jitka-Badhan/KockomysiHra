import React, { useEffect, useState } from 'react';
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
  const [selectedSort, setSelectedSort] = useState(undefined);
  const [remainingSeconds, setRemainingSeconds] = useState(localStorage.getItem('myTime') || 3600);

  const changeR = (score) => {
    setMyData((draft) => {
      draft.scores.R = draft.scores.R + score;
    });
  };

  const changeTubes = () => {
    setMyData((draft) => {
      draft.scores.tubes = draft.scores.tubes - 1;
      draft.scores.tubes > 0
        ? console.log('Pokračujem')
        : alert('Došel kočvid');
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((remainingSeconds) => {
        if (remainingSeconds <= 0) {
          alert('SMITEC!!!');
          clearInterval(interval);
          return 0;
        }
        return remainingSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const save = () => {
    localStorage.setItem('myTime', remainingSeconds)
  };

  return (
    <>
      <Header />

      <div className="container game">
        <div className="container game__side">
          <GameNav save={save} />
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
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            changeR={changeR}
            changeTubes={changeTubes}
            myData={myData}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
