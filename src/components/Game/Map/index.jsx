import React from 'react';
import './style.css';

const Map = () => {
  return (
    <div className="card game__map">
      <div className="card__content">
        <div className="map__heading">Město Mňau-chen</div>
        <img
          src="/assets/mapka_navrh3.svg"
          alt="map of Mnau-chen"
          className="map"
        />
      </div>
    </div>
  );
};

export default Map;
