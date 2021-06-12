import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import data from '../../../data';

const Certificate = ({
  myScores,
  myIndex,
  totalPlayers,
  shareClicked,
  setShareClicked,
}) => {
  const rank =
    myScores.score > 0
      ? data.winner_ranks.find(
          (item) =>
            item.scoreUp >= myScores.score && item.scoreDown < myScores.score,
        )
      : data.winner_ranks.find((item) => item.scoreDown === 0);

  return (
    <>
      <div
        className={
          shareClicked
            ? 'container certificate blurred'
            : 'container certificate'
        }
      >
        <div className="certificate__photo">
          <img
            src={rank.pic}
            alt="photo of mouse puppet"
            className="certificate__img"
          />
          <div className="certificate__text">
            <div>Agent: {myScores.nick}</div>
            <div>{rank.name}</div>
          </div>
          <img
            src="/assets/seal.png"
            alt="seal"
            className="certificate__seal"
          />
        </div>
        <div className="container certificate__scores">
          <div className="scores__heading">
            <div>{rank.name}</div>
            <div>{rank.text}</div>
          </div>
          <div className="scores__score">
            <h4>Výsledek Tvého snažení</h4>
            <table>
              <tbody>
                <tr className="score__quizzes">
                  <td>Vyřešené rébusy:</td>
                  <td>{myScores.riddles}</td>
                </tr>
                <tr className="score__time">
                  <td>Čas:</td>
                  <td>
                    {String(Math.floor(myScores.time / 60)).padStart(2, 0) +
                      ':' +
                      String(myScores.time % 60).padStart(2, 0)}
                  </td>
                </tr>
                <tr className="score__R">
                  <td>Číslo R:</td>
                  <td>{myScores.score}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scores__rank">
            Mezi ostatními ses umístil na <strong>{myIndex}. místě</strong> ze 
            {totalPlayers}.
          </div>
          <div className="container certificate__buttons">
            <button
              className="button share"
              onClick={() => setShareClicked(true)}
            >
              <img src="/assets/share.svg" alt="share icon" />
              <p>Sdílej</p>
            </button>
            <button className="button print" onClick={() => print()}>
              <img src="/assets/print.svg" alt="print icon" />
              <p>Tiskni</p>
            </button>
            <Link
              to="/"
              className="button next"
              onClick={() => localStorage.clear()}
            >
              <img src="/assets/home.svg" alt="arrow next" />
              <p>Konec</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
