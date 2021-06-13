import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import './style.css';
import data from '../../data';

import Header from '../Header';
import GameNav from './GameNav';
import Inventory from './Inventory';
import Map from './Map';
import TheEnd from './TheEnd';

const Game = () => {
  const [myData, setMyData] = useImmer(data);
  const [theEnd, setTheEnd] = useState(false);
  const [endSituation, setEndSituation] = useState(0);

  useEffect(() => {
    const loadedSave = JSON.parse(localStorage.getItem('mySave'));

    const cemeteryIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.sort === 'Cemetery'),
    );
    const shoppingMallIndex = myData.buildings.indexOf(
      myData.buildings.find((building) => building.name === 'Obchoďák'),
    );

    loadedSave &&
      setMyData((draft) => {
        draft.scores.timeOnSave = loadedSave.myTime;
        draft.scores.tubes = loadedSave.myTubes;
        draft.scores.R = loadedSave.myR;
        draft.buildings[cemeteryIndex].visited = loadedSave.cemeteryVisited;
        draft.buildings[shoppingMallIndex].didMutate = loadedSave.mallMutated;

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
      : data.scores.timeOnStart,
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
      draft.scores.tubes > 0 || runTheEnd('kočvid');
    });
  };

  const runTheEnd = (situation) => {
    setEndSituation(situation);
    setTheEnd(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((remainingSeconds) => {
        if (remainingSeconds <= 0) {
          runTheEnd('čas');
          clearInterval(interval);
          return 0;
        }
        setMyData((draft) => {
          draft.scores.timeOnSave = remainingSeconds;
        });
        save();
        return remainingSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [myData]);

  const save = () => {
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
    const shoppingMall = myData.buildings.find(
      (building) => building.name === 'Obchoďák',
    );

    const mySave = JSON.stringify({
      myTime: myData.scores.timeOnSave,
      myTubes: myData.scores.tubes,
      myR: myData.scores.R,
      buildings: buildingsToSave,
      cemeteryVisited: cemetery.visited,
      mallMutated: shoppingMall.didMutate,
    });

    localStorage.setItem('mySave', mySave);
  };

  return (
    <>
      <Header pageName="hra" />

      <div className={theEnd ? 'container game blurred' : 'container game'}>
        <div className="container game__side">
          <GameNav setSelectedBuilding={setSelectedBuilding} />
          <Inventory myData={myData} clicked={clicked} />
        </div>

        <div className="main game__main">
          <Map
            setSelectedBuilding={setSelectedBuilding}
            selectedBuilding={selectedBuilding}
            selectedSort={selectedSort}
            remainingSeconds={remainingSeconds}
            setRemainingSeconds={setRemainingSeconds}
            changeR={changeR}
            changeTubes={changeTubes}
            clicked={clicked}
            myData={myData}
            setMyData={setMyData}
          />
        </div>
      </div>

      {theEnd && <TheEnd situation={endSituation} myData={myData} />}
    </>
  );
};

export default Game;
