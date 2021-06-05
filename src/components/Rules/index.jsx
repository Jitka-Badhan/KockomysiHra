import React from 'react';
import './style.css';

const Rules = () => {
  return (
    <section class="rules__main">
      <div class="rules__intro">
        Agente <i>"jmeno ve hre"</i>, děkujeme, že ses dobrovolně přihlásil
        pomoci myšímu společenství vypořádat se s arogantními kočkami! Zde
        najdeš přehled všeho, co potřebuješ znát, než se pustíš do mise. Můžeš
        sem nahlédnout kdykoli v průběhu hry.
      </div>
      <div class="container">
        <div class="rules__column">
          <div class="container rules__rule">
            <img
              src="img/rules/mapa.png"
              alt="printscreen2"
              class="rules__img"
            />
            <div class="rules__text">
              Na <strong>mapě</strong> najdeš všechna místa, kde se kočky
              shromažďují. Ne všechna budou otevřená. K těm zavřeným musíš
              nejdřív získat klíč. Doporučuji si projít aktivní budovy dřív, než
              začneš šířit Kočvid-19.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/budova.png"
              alt="printscreen3"
              class="rules__img"
            />
            <div class="rules__text">
              V <strong>budovách</strong> jde do tuhého – shromažďují se tu
              kočky. Ale bacha, je tu háček: musíš nejprve vyřešit rébus, který
              je v budově ukrytý. Některé rébusy nelze vyřešit hned – je potřeba
              nejprve nastřádat indicie.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/zkumavka.png"
              alt="printscreen4"
              class="rules__img"
            />
            <div class="rules__text">
              Do začátku získáváš <strong>5 zkumavek</strong> s Kočvidem-19. To
              znamená, že můžeš nakazit 5 koček, které budou nemoc šířit dál. S
              výběrem nejvhodnější kočky Ti pomůže správné řešení daného rébusu.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/hodinky.png"
              alt="printscreen5"
              class="rules__img"
            />
            <div class="rules__text">
              Získáváš také digitální <strong>hodinky</strong>, které Ti
              odměřují čas. Na vyřešení všech rébusů máš
              <strong>60 minut</strong>, než kočky zareagují na epidemii a
              zavedou přísná opatření. Potom číslo R poroste jen o 25% původní
              hodnoty.
            </div>
          </div>
        </div>

        <div class="rules__column">
          <div class="container rules__rule">
            <img
              src="img/rules/rebus.jpeg"
              alt="printscreen5"
              class="rules__img"
            />
            <div class="rules__text">
              K řešení <strong>rébusu</strong> si nachystej papír a tužku,
              umělou inteligenci, kočičího zajatce, cokoli je povoleno! Odpověď
              si ale pořádně rozmysli, protože každý rébus lze řešit jen jednou.
              Všechny rébusy lze vytisknout.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/inventar.png"
              alt="printscreen6"
              class="rules__img"
            />
            <div class="rules__text">
              Všechny nalezené rébusy a indicie se Ti ukládají do
              <strong>inventáře</strong>. Můžeš tak rozpracovat více rébusů
              zároveň a vracet se k nim bez použití mapy. Inventář je plně
              automatický – stačí jen kliknout na co potřebuješ.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/ulozit.png"
              alt="printscreen7"
              class="rules__img"
            />
            <div class="rules__text">
              <strong>Uložení hry</strong> zvol tehdy, když potřebuješ na
              nějakou dobu odjet z města a k misi se vrátit později. Přenést se
              v čase zpět do uloženého stavu mise je možné z domovské stránky.
            </div>
          </div>
          <div class="container rules__rule">
            <img
              src="img/rules/question-mark_icon.svg"
              alt="question mark icon"
              class="rules__img question-mark"
            />
            <div class="rules__text">
              V městě Mňau-chen je jedno místo, kam můžeš chodit pro
              <strong>nápovědu</strong>, když Ti nepůjde vyřešit rébus. Získání
              nápovědy Tě však stojí drahocenný čas – za každou radu zaplatíš 5
              min z celkového limitu.
            </div>
          </div>
        </div>
      </div>
      <div class="container rules__epilogue">
        <div class="epilogue__text">
          Teď už vše víš a můžeš se pustit do akce! Vkládáme do Tebe veškeré
          naděje – tato mise bude naším finálním vypořádáním se s kočkami!
        </div>
        <button>Přejít na hru</button>
      </div>
    </section>
  );
};

export default Rules;
