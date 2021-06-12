import React from 'react';
import './style.css';

import CrossButton from '../../CrossButton';

const SharePopup = ({ setShareClicked }) => {
  return (
    <div className="pop-up__share">
      <CrossButton closeIt={() => setShareClicked(false)} />
      <p className="share__description">
        Stáhni si certifikát a sdílej svůj zážitek s přáteli!
      </p>
      <img src="" alt="" className="share__certificate" />
      <div className="share__buttons container">
        <a href="" className="button">
          Stáhnout
        </a>
        <a href="" className="button">
          Facebook
        </a>
        <a href="" className="button">
          Twitter
        </a>
        <a href="" className="button">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SharePopup;
