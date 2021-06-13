import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg } from 'html-to-image';

import './style.css';
import { db } from '../../db';

import Header from '../Header';
import Certificate from './Certificate';
import SharePopup from './SharePopup';

const GameOver = () => {
  const [shareClicked, setShareClicked] = useState(false);
  const [myNewImgUrl, setMyNewImgUrl] = useState('');
  const [myScores, setMyScores] = useState(undefined);
  const [myIndex, setMyIndex] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const player_id = localStorage.getItem('player_id');

  const handleShareButton = () => {
    setShareClicked(true);
  };

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
          const myScreenshotElm = document.querySelector('#toSaveAsPng');
          setMyScores(doc.data());

          htmlToImage
            .toJpeg(
              myScreenshotElm,
              {
                backgroundColor: 'white',
              },
              { quality: 0.95 },
            )
            .then((dataUrl) => {
              const img = new Image();
              img.src = dataUrl;
              setMyNewImgUrl(dataUrl);
            })
            .catch(function (error) {
              console.error('oops, something went wrong!', error);
            });
        } else {
          console.log('No such document in Firestore!');
        }
      })
      .catch((error) => {
        console.log('Error getting document from Firestore:', error);
      });
  }, []);

  return (
    <div id="toSaveAsPng">
      <Header pageName="certifikát" />
      <section
        className={
          shareClicked
            ? 'main certificate__main blurred'
            : 'main certificate__main'
        }
      >
        {myScores && (
          <Certificate
            myScores={myScores}
            myIndex={myIndex}
            totalPlayers={totalPlayers}
            handleShareButton={handleShareButton}
          />
        )}
      </section>
      {shareClicked && (
        <SharePopup
          myScores={myScores}
          setShareClicked={setShareClicked}
          myNewImgUrl={myNewImgUrl}
        />
      )}
    </div>
  );
};

export default GameOver;
