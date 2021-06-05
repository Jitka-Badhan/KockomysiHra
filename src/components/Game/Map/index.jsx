import React from 'react';
import './style.css';

const Map = () => {
  const clicked = (e) => {
    const clickedX = e.screenX;
    const clickedY = e.screenY;

    if (clickedX > 585 && clickedX < 737 && clickedY > 301 && clickedY < 401) {
      console.log('Mám přejít na budovu.');
    }
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
