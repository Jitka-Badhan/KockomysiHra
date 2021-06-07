import React, { useState } from 'react';
import './style.css';

import Building from '../Building';
import Cemetery from '../Cemetery';
import House from '../House';
import Municipal from '../Municipal';

const Map = ({
  selectedBuilding,
  setSelectedBuilding,
  changeR,
  changeTubes,
  selectedSort,
  setMyData,
  myData,
  clicked,
}) => {
  return (
    <div className="card game__map">
      {selectedBuilding ? (
        <>
          {selectedSort === 'Riddle' && (
            <Building
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              changeR={changeR}
              changeTubes={changeTubes}
              myData={myData}
              setMyData={setMyData}
            />
          )}
          {selectedSort === 'Cemetery' && (
            <Cemetery
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              // myData={myData}
              // setMyData={setMyData}
            />
          )}
          {selectedSort === 'House' && (
            <House
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              myData={myData}
            />
          )}
          {selectedSort === 'Municipal' && (
            <Municipal
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              myData={myData}
            />
          )}
        </>
      ) : (
        <div className="card__content">
          <div className="map__heading">Město Mňau-chen</div>
          <div className="map">
            <svg
              id="map_of_clickable_objects"
              data-name="map_of_clickable_objects"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 191.19 123.62"
            >
              <title>mapa_objects</title>

              <ellipse
                cx="37.49"
                cy="16.76"
                rx="24.41"
                ry="12.2"
                style={{ fill: '#fff' }}
                id="Knihovna"
                onClick={clicked}
              />

              <ellipse
                cx="103.54"
                cy="44.38"
                rx="14.26"
                ry="11.15"
                style={{ fill: '#fff' }}
                id="Hospoda"
                onClick={clicked}
              />

              <ellipse
                cx="133.51"
                cy="10.37"
                rx="11.94"
                ry="10.37"
                style={{ fill: '#fff' }}
                id="Venkovský dům"
                onClick={clicked}
              />

              <ellipse
                cx="169.46"
                cy="16.97"
                rx="19.16"
                ry="13.62"
                style={{ fill: '#fff' }}
                id="Továrna"
                onClick={clicked}
              />

              <ellipse
                cx="143.15"
                cy="54.41"
                rx="13.98"
                ry="17.01"
                style={{ fill: '#fff' }}
                id="Radnice"
                onClick={clicked}
              />

              <ellipse
                cx="79.86"
                cy="83.38"
                rx="16.14"
                ry="10.01"
                style={{ fill: '#fff' }}
                id="Moderní dům"
                onClick={clicked}
              />

              <ellipse
                cx="25.53"
                cy="103"
                rx="25.53"
                ry="14.99"
                style={{ fill: '#fff' }}
                id="Park"
                onClick={clicked}
              />

              <ellipse
                cx="37.77"
                cy="55.79"
                rx="19.73"
                ry="15.41"
                style={{ fill: '#fff' }}
                id="Obchoďák"
                onClick={clicked}
              />

              <ellipse
                cx="161.72"
                cy="107.05"
                rx="29.46"
                ry="16.57"
                style={{ fill: '#fff' }}
                id="Hřbitov"
                onClick={clicked}
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
