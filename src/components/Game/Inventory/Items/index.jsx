import React from 'react';
import './style.css';
import data from '../../../../data.js';

const Item = ({ building, setSelectedBuilding }) => {
  const handleClick = () => {
    setSelectedBuilding(building.name);
  };

  return (
    <img
      src={building.imgUrl}
      className="building__detail inactive"
      onClick={handleClick}
    />
  );
};

const Items = ({ myData, setSelectedBuilding }) => {
  const buildings = myData.buildings.map((item) => {
    return {
      key: item.name,
      name: item.name,
      imgUrl: item.mapImg,
    };
  });

  const column1 = buildings.slice(0, 3);
  const column2 = buildings.slice(3, 5);
  const column3 = buildings.slice(5, 8);

  return (
    <div className="container inventory__items">
      <div className="inventory__column">
        {column1.map((item) => (
          <Item
            building={item}
            key={item.key}
            setSelectedBuilding={setSelectedBuilding}
          />
        ))}
      </div>
      <div className="inventory__column">
        {column2.map((item) => (
          <Item
            building={item}
            key={item.key}
            setSelectedBuilding={setSelectedBuilding}
          />
        ))}
      </div>
      <div className="inventory__column">
        {column3.map((item) => (
          <Item
            building={item}
            key={item.key}
            setSelectedBuilding={setSelectedBuilding}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
