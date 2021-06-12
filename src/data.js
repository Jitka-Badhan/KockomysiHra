const data = {
  player_nick: '',
  scores: {
    R: 0,
    tubes: 5,
    timeOnStart: 360,
    timeOnSave: 360,
  },
  intro: [
    {
      id: 0,
      img: '/assets/Intro/Intro0.png',
      texts: [
        'Bylo kdysi krásné město....',
        'Kočkomyšen, název, neslo.',
        'A v něm pěkně pospolu,',
        'Dělili se u stolu,',
        'Kočky, myšky, kamarádi,',
        'Tehdy se zde měli rádi.',
      ],
    },
    {
      id: 1,
      img: '/assets/Intro/Intro1.png',
      texts: [
        'Co však bylo, dávno není,',
        'Kočky k myším zuby cení!',
        'Žerou je a trhají,',
        'Dají si je k snídani!',
        'Rvou z nich maso, krev tu stříká,',
        'Myši našly odborníka.',
      ],
    },
    {
      id: 2,
      img: '/assets/Intro/Intro2.png',
      texts: [
        'Velký vědec, Míša Myškin,',
        'Pomůže dnes hodným myším.',
        'Na krvelačné bestie,',
        'Smrtící vir dobrý je!',
        'Kočvid-19 namíchal,',
        'Co však bude dělat dál?',
      ],
    },
    {
      id: 3,
      img: '/assets/Intro/Intro3.png',
      texts: [
        'Pomoz myškám virus šířit,',
        'Vzteklých koček počet snížit.',
        'Jen hodinu na to máš,',
        'Tak je důkladně nakaž.',
        'Pokud nevíš, která bije,',
        'Nápověda k ruce Ti je.',
      ],
    },
  ],
  buildings: [
    {
      name: 'Hospoda',
      sort: 'Riddle',
      mapImg: '/assets/buildings/bar_icon.png',
      column: '3',
      cardImg: '/assets/buildings/bar.png',
      description: [
        'Tohle je místní putyka,',
        'Kočky tu sedí u mlíka.',
        'Nakaž tu, která žere myši,',
        'Nákaza se prudce zvýší',
      ],
      quizz: {
        name: 'Hospoda',
        pic: '/assets/quizzes/Pub_final_better.png',
        text: 'Která kočka žere především myši?',
        answers: [
          {
            button: 'A',
            text: '',
            pic: '/assets/quizzes/cat_black.png',
            points: 1,
            finished: 'Zde kočky už nezachlastají.',
          },
          {
            button: 'B',
            text: '',
            pic: '/assets/quizzes/cat_grey.png',
            points: 0,
            finished: 'Kočky si na Tebe dají rundu.',
          },
          {
            button: 'C',
            text: '',
            pic: '/assets/quizzes/cat_white.png',
            points: 0,
            finished: 'Kočky si na Tebe dají rundu.',
          },
          {
            button: 'D',
            text: '',
            pic: '/assets/quizzes/cat_orange.png',
            points: 0,
            finished: 'Kočky si na Tebe dají rundu.',
          },
        ],
        hint: {
          text: '',
          pic: '/assets/photos/photo-like_square.png',
        },
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Knihovna',
      sort: 'Riddle',
      mapImg: '/assets/buildings/library_icon.png',
      column: '1',
      cardImg: '/assets/buildings/library.png',
      description: [
        'Nad knížkami potichoučku,',
        'Sedí kočky pěkně v hloučku.',
        'Najdi tu, co jde zapařit,',
        'Má šanci nejvíc dalších nakazit.',
      ],
      quizz: {
        name: 'Knihovna',
        pic: '/assets/quizzes/library_newest.png',
        text: 'Najdi kočku, co se po studiu setká s nejvíce kočkami.',
        answers: [
          {
            button: 'A',
            text: '',
            pic: '/assets/quizzes/cat_black.png',
            points: 0,
            finished: 'Tos teda netrefil.',
          },
          {
            button: 'B',
            text: '',
            pic: '/assets/quizzes/cat_white.png',
            points: 0.2,
            finished: 'Společenská kočka vypadá jinak.',
          },
          {
            button: 'C',
            text: '',
            pic: '/assets/quizzes/cat_orange.png',
            points: 1,
            finished: 'Atmosféra na párty byla toxická.',
          },
          {
            button: 'D',
            text: '',
            pic: '/assets/quizzes/cat_grey.png',
            points: 0.6,
            finished: 'Společenská kočka vypadá jinak.',
          },
        ],
        hint: {
          text: 'Každý obrázek reprezentuje jeden znak',
          pic: '',
        },
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Park',
      sort: 'Riddle',
      mapImg: '/assets/buildings/park_icon.png',
      column: '2',
      cardImg: '/assets/buildings/park.png',
      description: [
        'V zahradě se kočky hřejou,',
        'myši loví, pak se smějou.',
        'Když do bludiště vyrazíš,',
        'Kterou z koček nakazíš?',
      ],
      quizz: {
        name: 'Park',
        pic: '/assets/quizzes/Bludiste_final3.jpg',
        text: 'Ke kterým kočkám se dostaneš?',
        answers: [
          {
            button: 'A',
            text: '',
            pic: '/assets/quizzes/cat_black.png',
            points: 0,
            finished: 'Máš smůlu, kočkám si slunění nepřekazil.',
          },
          {
            button: 'B',
            text: '',
            pic: '/assets/quizzes/cat_grey.png',
            points: 1,
            finished: 'Zahrada teď patří myším.',
          },
          {
            button: 'C',
            text: '',
            pic: '/assets/quizzes/cat_sick.png',
            points: 0,
            finished: 'Máš smůlu, kočkám si slunění nepřekazil.',
          },
          {
            button: 'D',
            text: '',
            pic: '/assets/quizzes/cat_healthy.png',
            points: 0,
            finished: 'Máš smůlu, kočkám si slunění nepřekazil.',
          },
        ],
        hint: {
          text: 'Co chceš radit, hledej cestu!',
          pic: '',
        },
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Továrna',
      sort: 'Riddle',
      mapImg: '/assets/buildings/factory_icon.png',
      column: '3',
      cardImg: '/assets/buildings/factory.png',
      description: [
        'Jednou týdně, v sobotu,',
        'Mají kočky robotu.',
        'Když už si tu dneska s nima,',
        'Které číslo černá skrývá?',
      ],
      quizz: {
        name: 'Továrna',
        pic: '/assets/quizzes/Sudoku_final.jpg',
        text: 'Které číslo hlídá černá kočka?',
        answers: [
          {
            button: 'A',
            text: '2',
            pic: '',
            points: 0,
            finished: 'Matematika Ti moc nejde...',
          },
          {
            button: 'B',
            text: '4',
            pic: '',
            points: 1,
            finished: 'Černá kočka jde s virem domů.',
          },
          {
            button: 'C',
            text: '6',
            pic: '',
            points: 0,
            finished: 'Matematika Ti moc nejde...',
          },
          {
            button: 'D',
            text: '8',
            pic: '',
            points: 0,
            finished: 'Matematika Ti moc nejde...',
          },
        ],
        hint: {
          text: 'Zde platí pravidla jako u klasického sudoku. Navíc v každé barevné skupince vidíš součet čísel v ní obsažených (čísla ve skupince nesmí být stejná).',
          pic: '',
        },
        isActive: false,
        isSolved: false,
      },
      isActive: false,
    },
    {
      name: 'Obchoďák',
      sort: 'Riddle',
      mapImg: '/assets/buildings/shopping_mall_icon.png',
      column: '1',
      cardImg: '/assets/buildings/shopping_mall.png',
      description: [
        'Kočky rády shopuji,',
        'Mlíčko si zde kupují.',
        'Taky pasti, sýr a máslo,',
        'Kolik se jich v krámě sešlo?',
      ],
      quizz: {
        name: 'Obchoďák',
        pic: '/assets/quizzes/Mall_riddle.jpeg',
        text: 'Kolik koček je v obrázku ukrytých?',
        answers: [
          {
            button: 'A',
            text: '11',
            pic: '',
            points: 0.3,
            finished: 'Mršky se Ti schovaly.',
          },
          {
            button: 'B',
            text: '12',
            pic: '',
            points: 0.6,
            finished: 'Mršky se Ti schovaly.',
          },
          {
            button: 'C',
            text: '13',
            pic: '',
            points: 1,
            finished: 'Bystré oko, to se hned pozná.',
          },
          {
            button: 'D',
            text: '14',
            pic: '',
            points: 0,
            finished: 'Už z těch koček blbneš, tolik jich tam není.',
          },
        ],
        hint: {
          text: 'Některé kočky se rády schovávají',
          pic: '',
        },
        isActive: false,
        isSolved: false,
      },
      isActive: true,
      didMutate: false,
    },
    {
      name: 'Venkovský dům',
      sort: 'House',
      belongsTo: 'Knihovna',
      mapImg: '/assets/buildings/house_rustic_icon.png',
      column: '1',
      cardImg: '/assets/buildings/house_rustic.jpg',
      hintImg: '/assets/quizzes/library_hint_better.png',
      description: ['V budově byla ukryta tato indicie.'],
      quizz: {
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Moderní dům',
      sort: 'House',
      belongsTo: 'Hospoda',
      mapImg: '/assets/buildings/house_modern_icon.png',
      column: '3',
      cardImg: '/assets/buildings/house_modern.jpg',
      hintImg: '/assets/quizzes/pub_hint_better.png',
      description: ['V budově byla ukryta tato indicie.'],
      quizz: {
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Radnice',
      sort: 'Municipal',
      mapImg: '/assets/buildings/municipal_house_icon.png',
      column: '2',
      cardImg: [
        '/assets/quizzes/municipal_w_cat.jpg',
        '/assets/quizzes/municipal_w_milk.jpg',
      ],
      description: [
        [
          'Mám přístupovou kartu do továrny,',
          'ale není zadarmo...',
          'Kušuj, nebo tě sežeru!',
        ],
        [
          'Áááá, přesně to jsem potřeboval.',
          'Zde máš čipovou kartu do továrny',
          'a táhni mi z očí!',
        ],
      ],
      quizz: {
        isActive: false,
        isSolved: false,
      },
      isActive: true,
    },
    {
      name: 'Hřbitov',
      sort: 'Cemetery',
      mapImg: '/assets/buildings/cemetery_icon.png',
      cardImg: '/assets/buildings/cemetery.jpg',
      description1: [
        'Tady u nás na hřbitově,',
        'Mrtvé myšky leží v hrobě.',
        'Nakaž kočky, brachu,',
        'Nepoddej se strachu!',
      ],
      description2: [
        'Když budeš chtít poradit,',
        'Na mě se můžeš obrátit.',
        'Ale zbytečně mě nezdržuj,',
        'Raději zapoj rozum svůj.',
      ],
      description3: [
        'Dobrá rada, ta se cení,',
        'Kočky budou v ohrožení.',
        'Potřebuješ poradit?',
        'Musíš zde čas utratit.',
      ],
      visited: false,
    },
  ],
  winner_ranks: [
    {
      scoreUp: 5,
      scoreDown: 4,
      name: 'Si král!',
      pic: './assets/ranks/rank1.png',
      text: 'Podařilo se Ti převzít vládu nad městem, myšky se radují, kočky jsou na ústupu.',
    },
    {
      scoreUp: 4,
      scoreDown: 3,
      name: 'Stal si se ministrem zdravotnictví!',
      pic: './assets/ranks/rank2.png',
      text: 'Myšky Tě zvolili do funkce ministra a převzali vládu nad městem.',
    },
    {
      scoreUp: 3,
      scoreDown: 2,
      name: 'Agent myších služeb',
      pic: './assets/ranks/rank3.png',
      text: 'Převrat se nezdařil, nicméně kočky poznaly, zač je toho loket a začaly myšky tolerovat. Jako první krok přijali zpět původní název města.',
    },
    {
      scoreUp: 2,
      scoreDown: 1,
      name: 'Zaměstnanec továrny',
      pic: './assets/ranks/rank4.png',
      text: 'Kočky už si tolik nevyskakují, ale myšky se stále třesou strachy. Tebe teď vyslaly makat do továrny, ať očíhneš další možnosti převratu.',
    },
    {
      scoreUp: 1,
      scoreDown: 0,
      name: 'Skončil si ve vězení.... ',
      pic: './assets/ranks/rank5.png',
      text: 'Myšky se nadále třesou strachy, kočky  kralují a Tebe zajali jako odstrašující příklad pro případ, že by se někdo další chtěl pokusit o převrat.',
    },
  ],
};

export default data;
