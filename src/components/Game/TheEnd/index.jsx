import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'firebase/firestore';
import './style.css';
import { db } from '../../../db';

const TheEnd = ({ situation, myData }) => {
  const history = useHistory();
  const player_id = localStorage.getItem('player_id');
  console.log(player_id);
  console.log(myData);

  useEffect(() => {
    db.collection('players')
      .doc(player_id)
      .set(
        {
          score: myData.scores.R,
          riddles: 5 - myData.scores.tubes,
          time: myData.scores.timeOnStart - myData.scores.timeOnSave,
        },
        { merge: true },
      )
      .then(() => {
        console.log('Document successfully updated on Firestore!');
      })
      .catch((error) => {
        console.error('Error writing document to Firestore: ', error);
      });
  }, []);

  return (
    <div className="pop_up">
      <p>Došel Ti {situation}, musíš se vrátit domů...</p>
      <button onClick={() => history.push('/game-over')}>Ok</button>
    </div>
  );
};

export default TheEnd;
