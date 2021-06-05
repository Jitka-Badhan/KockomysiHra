import React from 'react';
import './style.css';
import data from '../../../../data.js';

const Item = ({ pic }) => {
  return <img src={pic} className="building__detail inactive" />;
};

const Items = () => {
  const buildings = data.buildings.map((item) => {
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
          <Item pic={item.imgUrl} key={item.key} />
        ))}
      </div>
      <div className="inventory__column">
        {column2.map((item) => (
          <Item pic={item.imgUrl} key={item.key} />
        ))}
      </div>
      <div className="inventory__column">
        {column3.map((item) => (
          <Item pic={item.imgUrl} key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default Items;
