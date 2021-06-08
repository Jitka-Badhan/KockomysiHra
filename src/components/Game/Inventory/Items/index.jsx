import React from 'react';
import './style.css';

const Item = ({ building, clicked }) => {
  return (
    <img
      id={building.name}
      src={building.mapImg}
      className={
        building.quizz.isActive
          ? 'building__detail'
          : 'building__detail inactive'
      }
      onClick={clicked}
    />
  );
};

const Items = ({ myData, clicked }) => {
  const buildingsToSchow = myData.buildings.filter(
    (building) => building.sort !== 'Cemetery',
  );

  return (
    <div className="container inventory__items">
      <div className="inventory__column">
        {buildingsToSchow
          .filter((building) => building.column === '1')
          .map((item) => (
            <Item building={item} key={item.name} clicked={clicked} />
          ))}
      </div>

      <div className="inventory__column">
        {buildingsToSchow
          .filter((building) => building.column === '2')
          .map((item) => (
            <Item building={item} key={item.name} clicked={clicked} />
          ))}
      </div>

      <div className="inventory__column">
        {buildingsToSchow
          .filter((building) => building.column === '3')
          .map((item) => (
            <Item building={item} key={item.name} clicked={clicked} />
          ))}
      </div>
    </div>
  );
};

export default Items;
