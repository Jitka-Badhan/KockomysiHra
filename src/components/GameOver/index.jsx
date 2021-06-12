import React, { useState, useEffect } from 'react';
import './style.css';
import { db } from '../../db';

import Header from '../Header';
import Certificate from './Certificate';
import SharePopup from './SharePopup';

const GameOver = () => {
  const [shareClicked, setShareClicked] = useState(false);
  const [myScores, setMyScores] = useState(undefined);
  const [myIndex, setMyIndex] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const player_id = localStorage.getItem('player_id');

  useEffect(() => {
    const playersRef = db.collection('players');
    let allPlayers = [];

    playersRef
      .orderBy('score', 'desc')
      .get()
      .then((doc) => {
        doc.docs.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          data.id = id;
          allPlayers.push(data);
        });

        setMyIndex(
          allPlayers.indexOf(
            allPlayers.find(
              (player) => player.id === localStorage.getItem('player_id'),
            ),
          ),
        );

        setTotalPlayers(allPlayers.length);
      });

    playersRef
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
      <Header pageName="certifikát" />
      <section className="main certificate__main">
        {myScores && (
          <Certificate
            myScores={myScores}
            myIndex={myIndex}
            totalPlayers={totalPlayers}
            shareClicked={shareClicked}
            setShareClicked={setShareClicked}
          />
        )}
        {shareClicked && <SharePopup setShareClicked={setShareClicked} />}
      </section>
    </>
  );
};

export default GameOver;
