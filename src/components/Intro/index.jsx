import React, { useState } from 'react';
import './style.css';
import Navigation from '../Navigation'
import Header from '../Header';
import data from '../../data';

const Intro = () => {
  const [index, setIndex] = useState(0);
  const selectedIntro = data.intro[index];


  return (
    <>
      <Header />
      <Navigation />
 
      <section className="main intro__main">
        <div className="container intro">
          <img
            src={selectedIntro.img}
            className="intro__img"
          />
          <div className="intro__text">
            {
              selectedIntro.texts.map(text => <p key={text}>{text}</p>)
            }
          </div>
        </div>
        <div className="container intro__buttons">
          <button className="container intro__button" onClick={()=>{setIndex(index-1)}} disabled={index === 0}>
            <p>Předchozí</p>
            <img
              className="intro__button_img"
              src="/assets/arrow-left.svg"
              alt="arrow icon"
            />
          </button>
          <button className="container intro__button" onClick={()=>{setIndex(index+1)}} disabled={index === data.intro.length - 1}>
            <img
              className="intro__button_img"
              src="/assets/arrow-right.svg"
              alt="arrow icon"
            />
            <p>Následující</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Intro;
