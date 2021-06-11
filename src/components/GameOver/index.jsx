import React from 'react';
import './style.css';

import Header from '../Header';
import Certificate from './Certificate';
import data from '../../data';

const GameOver = ({ myData }) => {
  const riddles = data.scores.tubes - myData.scores.tubes;
  const myTime = data.scores.timeOnStart - myData.scores.timeOnSave;
  const time =
    String(Math.floor(myTime / 60)).padStart(2, 0) +
    ':' +
    String(myTime % 60).padStart(2, 0);
  const score = myData.scores.R;
  const rank = myData.winner_ranks.filter(
    (item) => item.scoreUp >= score && item.scoreDown < score,
  )[0];
  console.log(rank[0]);

  return (
    <>
      <Header pageName="vyhodnocení" />
      <section className="main certificate__main">
        <Certificate riddles={riddles} time={time} score={score} rank={rank} />
      </section>
    </>
  );
};

export default GameOver;
