import React from 'react';
import './style.css';

import Counters from './Counters';
import Items from './Items';

const Inventory = () => {
  return (
    <div className="container inventory">
      <div className="inventory__header">
        <div className="inventory__icon">
          <p>Inventář</p>
          <hr />
        </div>

        <Counters />
        <Items />
      </div>
    </div>
  );
};

export default Inventory;
