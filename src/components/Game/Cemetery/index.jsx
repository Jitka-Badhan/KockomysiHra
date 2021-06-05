import React from 'react';
import 'style.css';

const Cemetery = () => {
  return (
    <div class="card game__cemetery">
      <img src="/img/cross.svg" alt="cross" class="top-right cancel" />
      <div class="card__content">
        <img
          src="img/buildings/cemetery.jpg"
          alt="cemetery day"
          class="cemetery__img"
        />
        <div class="cemetery__text">
          <h4>Hřbitov</h4>
          <div class="container">
            <div class="paragraph">
              <p>Tady u nás na hřbitově</p>
              <p>mrtvé myšky leží v hrobě.</p>
              <p>Nakaž kočky, brachu,</p>
              <p>nepoddej se strachu!</p>
            </div>
            <div class="paragraph">
              <p>Když budeš chtít poradit,</p>
              <p>na mě se můžeš obrátit.</p>
              <p>Ale zbytečně mě nezdržuj,</p>
              <p>raději zapoj rozum svůj.</p>
            </div>
          </div>
        </div>
        <div class="cemetery__buttons">
          <img
            src="img/buildings/library_icon.png"
            alt="library"
            class="cemetery__button building__detail"
          />
          <img
            src="img/buildings/shopping_mall_icon.png"
            alt="shopping mall"
            class="cemetery__button building__detail"
          />
          <img
            src="img/buildings/factory_icon.png"
            alt="factory"
            class="cemetery__button building__detail"
          />
          <img
            src="img/buildings/park_icon.png"
            alt="park with pond and bridge"
            class="cemetery__button building__detail"
          />
          <img
            src="img/buildings/bar_icon.png"
            alt="bar"
            class="cemetery__button building__detail"
          />
        </div>
        <div class="card__buttons">
          <button class="cancel">Zrušit</button>
        </div>
      </div>
    </div>
  );
};

export default Cemetery;
