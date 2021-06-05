import React from 'react';
import 'style.css';

const Cemetery = () => {
  return (
    <div className="card game__cemetery">
      <img src="/img/cross.svg" alt="cross" className="top-right cancel" />
      <div className="card__content">
        <img
          src="img/buildings/cemetery.jpg"
          alt="cemetery day"
          className="cemetery__img"
        />
        <div className="cemetery__text">
          <h4>Hřbitov</h4>
          <div className="container">
            <div className="paragraph">
              <p>Tady u nás na hřbitově</p>
              <p>mrtvé myšky leží v hrobě.</p>
              <p>Nakaž kočky, brachu,</p>
              <p>nepoddej se strachu!</p>
            </div>
            <div className="paragraph">
              <p>Když budeš chtít poradit,</p>
              <p>na mě se můžeš obrátit.</p>
              <p>Ale zbytečně mě nezdržuj,</p>
              <p>raději zapoj rozum svůj.</p>
            </div>
          </div>
        </div>
        <div className="cemetery__buttons">
          <img
            src="img/buildings/library_icon.png"
            alt="library"
            className="cemetery__button building__detail"
          />
          <img
            src="img/buildings/shopping_mall_icon.png"
            alt="shopping mall"
            className="cemetery__button building__detail"
          />
          <img
            src="img/buildings/factory_icon.png"
            alt="factory"
            className="cemetery__button building__detail"
          />
          <img
            src="img/buildings/park_icon.png"
            alt="park with pond and bridge"
            className="cemetery__button building__detail"
          />
          <img
            src="img/buildings/bar_icon.png"
            alt="bar"
            className="cemetery__button building__detail"
          />
        </div>
        <div className="card__buttons">
          <button className="cancel">Zrušit</button>
        </div>
      </div>
    </div>
  );
};

export default Cemetery;
