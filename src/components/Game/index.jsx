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
  const [selectedSort, setSelectedSort] = useState(undefined);
  const [remainingSeconds, setRemainingSeconds] = useState(
    localStorage.getItem('mySave')
      ? JSON.parse(localStorage.getItem('mySave')).myTime
      : 3600,
  );

  const clicked = (e) => {
    const thisBuilding = myData.buildings.find(
      (building) => building.name === e.target.id,
    );
    const thisBuildingIndex = myData.buildings.indexOf(thisBuilding);
    const cemeteryIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.sort === 'Cemetery'),
    );

    setSelectedBuilding(thisBuilding);
    setSelectedSort(thisBuilding.sort);
    setMyData((draft) => {
      draft.buildings[thisBuildingIndex].isActive = true;
    });

    thisBuilding.sort === 'Cemetery' &&
      setMyData((draft) => {
        draft.buildings[cemeteryIndex].visited = true;
      });
  };

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
            remainingSeconds={remainingSeconds}
            clicked={clicked}
          />
        </div>

        <div className="main game__main">
          <Map
            setSelectedBuilding={setSelectedBuilding}
            selectedBuilding={selectedBuilding}
            selectedSort={selectedSort}
            changeR={changeR}
            changeTubes={changeTubes}
            clicked={clicked}
            myData={myData}
            setMyData={setMyData}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
