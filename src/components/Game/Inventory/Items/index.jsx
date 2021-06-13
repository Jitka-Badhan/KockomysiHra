import React from 'react';
import './style.css';

const Item = ({ building, clicked }) => {
  return (
    <div className="toStamp">
      <div
        className={
          building.quizz.isActive
            ? 'building__detail'
            : building.name !== 'Obchoďák' || !building.didMutate
            ? 'building__detail inactive'
            : 'building__detail mutated'
        }
        onClick={clicked}
      >
        <img id={building.name} src={building.mapImg} />
      </div>
      <img
        src="../../../../assets/logo_mouse_footprint.png"
        className={
          !building.quizz.isSolved ||
          (building.name === 'Obchoďák' && building.didMutate)
            ? 'stamp__quest__done hidden'
            : 'stamp__quest__done'
        }
      />
    </div>
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
            <Item
              myData={myData}
              building={item}
              key={item.name}
              clicked={clicked}
            />
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
