import React from 'react';
import './style.css';

const Counters = ({ myData }) => {
  return (
    <div className="container game__counters">
      <div className="game__counter test_tubes">
        <img
          src="/assets/test-tube.png"
          alt="test tube icon"
          className="test_tube__img"
        />
        <div className="test__tube">
          <div className="test_tube__count">{myData.scores.tubes}</div>
        </div>
      </div>
      <div className="countR">
        <div className="countR__count">{myData.scores.R.toFixed(1)}</div>
        <div className="countR__label">Reprodukční číslo R</div>
      </div>
      <div className="game__counter watch">
        <img
          src="assets/watch_col.png"
          alt="watch icon"
          className="timer__img"
        />
        <div className="timer">
          <div className="timer__count">
            {String(Math.floor(myData.scores.timeOnSave / 60)).padStart(2, 0)}:
            {String(myData.scores.timeOnSave % 60).padStart(2, 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
