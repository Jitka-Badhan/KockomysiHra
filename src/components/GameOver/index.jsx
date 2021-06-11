import React, { useState, useEffect } from 'react';
import './style.css';
import { db } from '../../db';

import Header from '../Header';
import Certificate from './Certificate';
import data from '../../data';

const GameOver = ({ myData }) => {
  const [myScores, setMyScores] = useState(undefined);

  useEffect(() => {
    db.collection('players').onSnapshot((snapshot) => {
      const scores = snapshot.docs.map((doc) => doc.data());
      setMyScores(scores.find((item) => item.nick === 'Kocour'));
    });
  }, []);

  return (
    <>
      {myScores && (
        <>
          <Header pageName="vyhodnocení" />
          <section className="main certificate__main">
            <Certificate myData={myData} myScores={myScores} />
          </section>
        </>
      )}
    </>
  );
};

export default GameOver;
