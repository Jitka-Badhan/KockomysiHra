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

    const cemeteryIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.sort === 'Cemetery'),
    );

    loadedSave &&
      setMyData((draft) => {
        draft.scores.timeOnSave = loadedSave.myTime;
        draft.scores.tubes = loadedSave.myTubes;
        draft.scores.R = loadedSave.myR;
        draft.buildings[cemeteryIndex].visited = loadedSave.cemeteryVisited;

        loadedSave.buildings.forEach((item, index) => {
          draft.buildings[index].isActive = item.isActive;
          draft.buildings[index].quizz.isActive = item.quizzActive;
          draft.buildings[index].quizz.isSolved = item.quizzSolved;
        });
      });
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
    const cemeteryIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.sort === 'Cemetery'),
    );

    setSelectedBuilding(thisBuilding);
    setSelectedSort(thisBuilding.sort);
  };

  const changeR = (score) => {
    setMyData((draft) => {
      draft.scores.R = draft.scores.R + score;
    });
  };

  const changeTubes = () => {
    setMyData((draft) => {
      draft.scores.tubes = draft.scores.tubes - 1;
      draft.scores.tubes > 0 || alert('Došel kočvid');
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
    const buildingsToSave = myData.buildings
      .filter((building) => building.sort !== 'Cemetery')
      .map((building) => {
        return {
          name: building.name,
          isActive: building.isActive,
          quizzActive: building.quizz.isActive,
          quizzSolved: building.quizz.isSolved,
        };
      });
    const cemetery = myData.buildings.find(
      (building) => building.sort === 'Cemetery',
    );

    const mySave = JSON.stringify({
      myTime: remainingSeconds,
      myTubes: myData.scores.tubes,
      myR: myData.scores.R,
      buildings: buildingsToSave,
      cemeteryVisited: cemetery.visited,
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
            remainingSeconds={remainingSeconds}
            setRemainingSeconds={setRemainingSeconds}
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
