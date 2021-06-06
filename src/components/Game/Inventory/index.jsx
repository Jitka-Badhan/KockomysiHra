import React from 'react';
import './style.css';

import Counters from './Counters';
import Items from './Items';

const Inventory = ({
  myData,
  setSelectedBuilding,
  setSelectedSort,
  remainingSeconds,
  remainingTubes,
  remainingR,
}) => {
  return (
    <div className="container inventory">
      <div className="inventory__header">
        <div className="inventory__icon">
          <p>Inventář</p>
          <hr />
        </div>
      </div>

      <Counters
        remainingSeconds={remainingSeconds}
        remainingTubes={remainingTubes}
        remainingR={remainingR}
        myData={myData}
      />

      <Items
        myData={myData}
        setSelectedBuilding={setSelectedBuilding}
        setSelectedSort={setSelectedSort}
      />
    </div>
  );
};

export default Inventory;
