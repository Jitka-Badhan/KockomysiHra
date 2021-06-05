import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div class="container header">
        <img
          class="header__img"
          src="img/mouse_silhouette.png"
          alt="mouse silhouette"
        />
        <h1 class="rules__header header__inline">
          <span class="logo">Kočkomyší hra</span>
          <img
            src="img/logo_mouse_footprint.png"
            alt="mouse footprint"
            class="logo__img"
          />
          <span class="page_name">pravidla</span>
        </h1>
        <img
          class="header__img"
          src="img/cat1_white.png"
          alt="cat_silhouette"
        />
      </div>
    </header>
  );
};

export default Header;
