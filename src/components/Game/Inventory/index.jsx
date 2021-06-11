import React from 'react';
import './style.css';

import Counters from './Counters';
import Items from './Items';

const Inventory = ({ myData, clicked }) => {
  return (
    <div className="container inventory">
      <div className="inventory__header">
        <div className="inventory__icon">
          <p>Inventář</p>
          <hr />
        </div>
      </div>

      <Counters myData={myData} />

      <Items myData={myData} clicked={clicked} />
    </div>
  );
};

export default Inventory;
