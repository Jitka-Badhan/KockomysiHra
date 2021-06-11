import React, { useState, useEffect } from 'react';
import './style.css';
import { db } from '../../db';

import Header from '../Header';
import Certificate from './Certificate';

const GameOver = () => {
  const [myScores, setMyScores] = useState(undefined);
  const player_id = localStorage.getItem('player_id');

  useEffect(() => {
    db.collection('players')
      .doc(player_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMyScores(doc.data());
        } else {
          console.log('No such document in Firestore!');
        }
      })
      .catch((error) => {
        console.log('Error getting document from Firestore:', error);
      });
  }, []);

  return (
    <>
      {myScores && (
        <>
          <Header pageName="vyhodnocení" />
          <section className="main certificate__main">
            <Certificate myScores={myScores} />
          </section>
        </>
      )}
    </>
  );
};

export default GameOver;
