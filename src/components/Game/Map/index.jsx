import React, { useState } from 'react';
import './style.css';

import Building from '../Building';

const mapItemsIndexes = [
  {
    name: 'Hospoda',
    startX: 549,
    endX: 654,
    startY: 409,
    endY: 437,
  },
  {
    name: 'Knihovna',
    startX: 321,
    endX: 468,
    startY: 288,
    endY: 353,
  },
  {
    name: 'Obchoďák',
    startX: 346,
    endX: 446,
    startY: 402,
    endY: 475,
  },
  {
    name: 'Venkovský dům',
    startX: 640,
    endX: 714,
    startY: 279,
    endY: 331,
  },
  {
    name: 'Továrna',
    startX: 723,
    endX: 836,
    startY: 287,
    endY: 356,
  },
  {
    name: 'Radnice',
    startX: 660,
    endX: 751,
    startY: 385,
    endY: 476,
  },
  {
    name: 'Moderní dům',
    startX: 479,
    endX: 567,
    startY: 493,
    endY: 543,
  },
  {
    name: 'Zahrada',
    startX: 292,
    endX: 409,
    startY: 544,
    endY: 623,
  },
  {
    name: 'Hřbitov',
    startX: 668,
    endX: 836,
    startY: 548,
    endY: 633,
  },
];

const Map = ({ changeCard }) => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const clicked = (e) => {
    const clickedX = e.screenX;
    const clickedY = e.screenY;

    mapItemsIndexes.forEach((item) => {
      if (
        clickedX > item.startX &&
        clickedX < item.endX &&
        clickedY > item.startY &&
        clickedY < item.endY
      ) {
        setSelectedBuilding(item.name);
        changeCard(item.name);
      }
    });
  };

  return (
    <div className="card game__map">
      <div className="card__content">
        <div className="map__heading">Město Mňau-chen</div>
        <img
          src="/assets/mapka_navrh3.png"
          alt="map of Mnau-chen"
          className="map"
          onClick={clicked}
        />
      </div>
    </div>
  );
};

export default Map;
