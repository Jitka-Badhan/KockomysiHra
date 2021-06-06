import React from 'react';
import './style.css';

const Item = ({ building, setSelectedBuilding, setSelectedSort }) => {
  const handleClick = () => {
    setSelectedBuilding(building.name);
    setSelectedSort(building.sort);
    console.log(building);
  };

  return (
    <img
      src={building.imgUrl}
      className="building__detail inactive"
      onClick={handleClick}
    />
  );
};

const Items = ({ myData, setSelectedBuilding, setSelectedSort }) => {
  const buildings = myData.buildings.map((item) => {
    return {
      key: item.name,
      name: item.name,
      sort: item.sort,
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
            setSelectedSort={setSelectedSort}
          />
        ))}
      </div>
      <div className="inventory__column">
        {column2.map((item) => (
          <Item
            building={item}
            key={item.key}
            setSelectedBuilding={setSelectedBuilding}
            setSelectedSort={setSelectedSort}
          />
        ))}
      </div>
      <div className="inventory__column">
        {column3.map((item) => (
          <Item
            building={item}
            key={item.key}
            setSelectedBuilding={setSelectedBuilding}
            setSelectedSort={setSelectedSort}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
