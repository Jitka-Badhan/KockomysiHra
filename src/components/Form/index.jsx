import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { db } from '../../db';

import CrossButton from '../CrossButton';

const Form = ({ blurApplied, toggleForm }) => {
  const [nick, setNick] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setNick(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('players')
      .add({ nick: nick })
      .then((docRef) => {
        localStorage.setItem('player_id', `${docRef.id}`);
        localStorage.setItem('player_nick', `${nick}`);
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });

    // setNick('');
    setIsSubmitted(true);
  };

  return (
    <div className={blurApplied ? 'form' : 'form hidden'}>
      <CrossButton
        closeIt={() => {
          toggleForm(false);
        }}
      />
      <form className={isSubmitted ? 'form__form hidden' : 'form__form'}>
        <label>
          <div className="form__text">Zadej svůj nickname myšího agenta:</div>
          <input type="text" onChange={handleChange} value={nick} />
          <button onClick={handleSubmit}>Potvrdit</button>
        </label>
      </form>
      <div className={isSubmitted ? 'welcome' : 'welcome hidden'}>
        <div className="welcome__text">
          Vítám Tě mezi námi, agente <strong>{nick}</strong>! Dovol mi Tě
          seznámit se smutným příběhem našeho myšího společenství...
        </div>
        <Link to="/intro" className="button">
          Pokračovat na Intro
        </Link>
      </div>
    </div>
  );
};

export default Form;
