import React from 'react';
import './style.css';

import Counters from './Counters';

const Inventory = () => {
  return (
    <div className="container inventory">
      <div className="inventory__header">
        <div className="inventory__icon">
          <p>Inventář</p>
          <hr />
        </div>

        <Counters />

        <div className="container inventory__items">
          {/* <div className="inventory__column">
            <img
              src="assets/buildings/library_icon.png"
              alt="library"
              className="building__detail inactive"
            />
            <img
              src="assets/buildings/shopping_mall_icon.png"
              alt="shopping mall"
              className="building__detail inactive"
            />
            <img
              src="assets/buildings/factory_icon.png"
              alt="factory"
              className="building__detail inactive"
            />
          </div>
          <div className="inventory__column">
            <img
              src="/assets/buildings/park_icon.png"
              alt="park with pond and bridge"
              className="building__detail inactive"
            />
            <img
              src="assets/buildings/bar_icon.png"
              alt="bar"
              className="building__detail inactive"
            />
          </div>
          <div className="inventory__column">
            <img
              src="assets/buildings/municipal_house_icon.png"
              alt="municipal building"
              className="building__detail inactive"
            />
            <img
              src="assets/buildings/house_modern_icon.png"
              alt="moder house"
              className="building__detail inactive"
            />
            <img
              src="assets/buildings/house_rustic_icon.png"
              alt="rustic house"
              className="building__detail inactive"
            />
          </div> */}
          Itemy
        </div>
      </div>
    </div>
  );
};

export default Inventory;
