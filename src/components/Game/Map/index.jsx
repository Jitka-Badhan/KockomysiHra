import React, { useState } from 'react';
import './style.css';

import Building from '../Building';
import Cemetery from '../Cemetery';
import House from '../House';
import Municipal from '../Municipal';
import Magnifier from '../../Magnifier';

const Map = ({
  selectedBuilding,
  setSelectedBuilding,
  selectedSort,
  remainingSeconds,
  setRemainingSeconds,
  changeR,
  changeTubes,
  setMyData,
  myData,
  clicked,
}) => {
  const [magnify, setMagnify] = useState(false);
  const toggleMagnify = () => setMagnify(!magnify);

  return (
    <div className="card game__map">
      {selectedBuilding ? (
        <>
          {selectedSort === 'Riddle' && (
            <Building
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
              changeR={changeR}
              changeTubes={changeTubes}
              magnify={magnify}
              toggleMagnify={toggleMagnify}
              myData={myData}
              setMyData={setMyData}
            />
          )}
          {selectedSort === 'Cemetery' && (
            <Cemetery
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              myData={myData}
              clicked={clicked}
              remainingSeconds={remainingSeconds}
              setRemainingSeconds={setRemainingSeconds}
              magnify={magnify}
              toggleMagnify={toggleMagnify}
              setMyData={setMyData}
            />
          )}
          {selectedSort === 'House' && (
            <House
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
              magnify={magnify}
              toggleMagnify={toggleMagnify}
              myData={myData}
              setMyData={setMyData}
            />
          )}
          {selectedSort === 'Municipal' && (
            <Municipal
              selectedBuilding={selectedBuilding}
              backHome={setSelectedBuilding}
              myData={myData}
              setMyData={setMyData}
            />
          )}
        </>
      ) : (
        <div className="card__content">
          <div className="map__heading"></div>
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
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Knihovna',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="40"
                y="14"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Knihovna',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="103.54"
                cy="44.38"
                rx="14.26"
                ry="11.15"
                style={{ fill: '#fff' }}
                id="Hospoda"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Hospoda',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="104"
                y="43"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Hospoda',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="133.51"
                cy="10.37"
                rx="11.94"
                ry="10.37"
                style={{ fill: '#fff' }}
                id="Venkovský dům"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Venkovský dům',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="133"
                y="9"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Venkovský dům',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="169.46"
                cy="16.97"
                rx="19.16"
                ry="13.62"
                style={{ fill: '#fff' }}
                id="Továrna"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Továrna',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="165"
                y="17"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Továrna',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="143.15"
                cy="54.41"
                rx="13.98"
                ry="17.01"
                style={{ fill: '#fff' }}
                id="Radnice"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Radnice',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="144"
                y="55"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Radnice',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="79.86"
                cy="83.38"
                rx="16.14"
                ry="10.01"
                style={{ fill: '#fff' }}
                id="Moderní dům"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Moderní dům',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="80"
                y="78"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Moderní dům',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="25.53"
                cy="103"
                rx="25.53"
                ry="14.99"
                style={{ fill: '#fff' }}
                id="Park"
                onClick={clicked}
                className={
                  !myData.buildings.find((building) => building.name === 'Park')
                    .isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="26"
                y="100"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find((building) => building.name === 'Park')
                    .quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="37.77"
                cy="55.79"
                rx="19.73"
                ry="15.41"
                style={{ fill: '#fff' }}
                id="Obchoďák"
                onClick={clicked}
                className={
                  !myData.buildings.find(
                    (building) => building.name === 'Obchoďák',
                  ).isActive
                    ? 'disabled'
                    : 'invisible'
                }
              />
              <image
                x="38"
                y="55"
                width="1rem"
                height="1rem"
                href="assets/logo_mouse_footprint.png"
                className={
                  myData.buildings.find(
                    (building) => building.name === 'Obchoďák',
                  ).quizz.isSolved
                    ? undefined
                    : 'disabled'
                }
              />

              <ellipse
                cx="161.72"
                cy="107.05"
                rx="29.46"
                ry="16.57"
                style={{ fill: '#fff' }}
                id="Hřbitov"
                onClick={clicked}
                className="invisible"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
