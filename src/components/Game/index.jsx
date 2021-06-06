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

  useEffect(() => {
    const loadedSave = JSON.parse(localStorage.getItem('mySave'));

    loadedSave
      ? setMyData((draft) => {
          draft.scores.timeOnSave = loadedSave.myTime;
          draft.scores.tubes = loadedSave.myTubes;
          draft.scores.R = loadedSave.myR;
        })
      : console.log('Nic k načtení');
  }, []);

  const [selectedBuilding, setSelectedBuilding] = useState(undefined);
  const [remainingSeconds, setRemainingSeconds] = useState(
    localStorage.getItem('mySave')
      ? JSON.parse(localStorage.getItem('mySave')).myTime
      : 3600,
  );

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
        save(remainingSeconds);
        return remainingSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [myData]);

  const save = (remainingSeconds) => {
    const mySave = JSON.stringify({
      myTime: remainingSeconds,
      myTubes: myData.scores.tubes,
      myR: myData.scores.R,
    });

    localStorage.setItem('mySave', mySave);
  };

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
            changeR={changeR}
            changeTubes={changeTubes}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
