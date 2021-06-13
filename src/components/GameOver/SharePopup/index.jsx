import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import './style.css';
import data from '../../../data';

import CrossButton from '../../CrossButton';
import Printscreen from '../Printscreen';

const SharePopup = ({ myScores, setShareClicked, myNewImgUrl }) => {
  const myRank = (
    myScores.score > 0
      ? data.winner_ranks.find(
          (item) =>
            item.scoreUp >= myScores.score && item.scoreDown < myScores.score,
        )
      : data.winner_ranks.find((item) => item.scoreDown === 0)
  ).name;
  const myScore = myScores.score;

  return (
    <div className="pop-up__share">
      <CrossButton closeIt={() => setShareClicked(false)} />
      <div className="share__description">
        Stáhni si svůj certifikát jako printscreen nebo sdílej své dojmy s
        přáteli!
      </div>
      <Printscreen myNewImgUrl={myNewImgUrl} />
      <div className="share__buttons container">
        <a href={myNewImgUrl} download="muj_certifikat">
          <img src="../../../assets/download.svg" alt="" className="button" />
        </a>
        <EmailShareButton
          url="https://blissful-kirch-ce92ad.netlify.app/"
          subject="Kočkomyší hra"
          body="Zkus si zahrát..."
          className="button"
        >
          <EmailIcon round />
        </EmailShareButton>
        <FacebookShareButton
          url="https://blissful-kirch-ce92ad.netlify.app/"
          quote={`Dnes jsem hrál Kočkomyší hru a skončil jsem s R ${myScore} takto: "${myRank}". :-) Jak daleko se dostanete vy?`}
          className="button"
        >
          <FacebookIcon round />
        </FacebookShareButton>
        <TwitterShareButton
          url="https://blissful-kirch-ce92ad.netlify.app/"
          title="Kočkomyší hra"
          hashtags={['rébusy', 'únikovka', 'SmíchemProtiKovidu']}
          className="button"
        >
          <TwitterIcon round />
        </TwitterShareButton>
        <WhatsappShareButton
          url="https://blissful-kirch-ce92ad.netlify.app/"
          title="Kočkomyší hra – těžký rébusy a super zážitek"
          className="button"
        >
          <WhatsappIcon round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SharePopup;
