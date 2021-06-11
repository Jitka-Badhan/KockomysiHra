import React from 'react';
import './style.css';

const Header = ({ pageName }) => {
  return (
    <header>
      <div className="container header">
        <img
          className="header__img"
          src="assets/mouse_silhouette.png"
          alt="mouse silhouette"
        />
        <h1 className="rules__header header__inline">
          <span className="logo">Kočkomyší hra</span>
          <img
            src="assets/logo_mouse_footprint.png"
            alt="mouse footprint"
            className="logo__img"
          />
          <span className="page_name">{pageName}</span>
        </h1>
        <img
          className="header__img"
          src="assets/cat1_white.png"
          alt="cat_silhouette"
        />
      </div>
    </header>
  );
};

export default Header;
