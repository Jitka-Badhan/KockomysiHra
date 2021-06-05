import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div classNameName="container header">
        <img
          classNameName="header__img"
          src="assets/mouse_silhouette.png"
          alt="mouse silhouette"
        />
        <h1 classNameName="rules__header header__inline">
          <span classNameName="logo">Kočkomyší hra</span>
          <img
            src="assets/logo_mouse_footprint.png"
            alt="mouse footprint"
            classNameName="logo__img"
          />
          <span classNameName="page_name">pravidla</span>
        </h1>
        <img
          classNameName="header__img"
          src="assets/cat1_white.png"
          alt="cat_silhouette"
        />
      </div>
    </header>
  );
};

export default Header;
