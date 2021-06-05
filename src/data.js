const data = {
  intro : [{
    id : 0,
    img : '/assets/Intro/Intro0.png', 
    texts : [
      'Bylo kdysi krásné město....',
      'Kočkomyšen, název, neslo.',
      'A v něm pěkně pospolu,',
      'Dělili se u stolu,',
      'Kočky, myšky, kamarádi,',
      'Tehdy se zde měli rádi.',
    ]},
    {
      id : 1,
      img : '/assets/Intro/Intro1.png', 
      texts : [
        'Co však bylo, dávno není,',
        'Kočky k myším zuby cení!',
        'Žerou je a trhají,',
        'Dají si je k snídani!',
        'Rvou z nich maso, krev tu stříká,',
        'Myši našly odborníka.',
      ]},
      {
        id : 2,
        img : '/assets/Intro/Intro2.png', 
        texts : [
          'Velký vědec, Míša Myškin,',
          'Pomůže dnes hodným myším.',
          'Na krvelačné bestie,',
          'Smrtící vir dobrý je!',
          'Kočvid-19 namíchal,',
          'Co však bude dělat dál?',
        ]},
        {
          id : 3,
          img : '/assets/Intro/Intro3.png', 
          texts : [
            'Pomoz myškám virus šířit,',
            'Vzteklých koček počet snížit.',
            'Jen hodinu na to máš,',
            'Tak je důkladně nakaž.',
            'Pokud nevíš, která bije,',
            'Nápověda k ruce Ti je.',
          ]},
        ],
  buildings : [
    {
      name : 'Hospoda',
      mapImg : '/assets/buildings/bar_icon.png',
      cardImg : '/assets/buildings/bar.jpg',
      function : 'quizz',
      description : ['Tohle je místní putyka,', 'Kočky tu sedí u mlíka.', 'Nakaž tu, která žere myši,', 'Nákaza se prudce zvýší',],
      quizz : {
        name : 'Hospoda',
        pic : '/assets/quizzes/Pub_riddle.png',
        text : 'Která kočka žere především myši?',
        answers : [
          {
            button : 'A',
            text : '',
            pic : '/assets/quizzes/cat_black.png',
            points : 1,
          }, 
          {
            button : 'B',
            text : '',
            pic : '/assets/quizzes/cat_grey.png',
            points : 0,
          },
          {
            button : 'C',
            text : '',
            pic : '/assets/quizzes/cat_sick.png',
            points : 0,
          },
          {
            button : 'D',
            text : '',
            pic : '/assets/quizzes/cat_healthy.png',
            points : 0,
          }, 
        ],
        solution : 'A',
        hint : {
          text : '',
          pic : '/assets/photos/photo-like_square.png',
        },
        isSolved : false,
        result : {
          ifCorrect : 'Zde kočky už nezachlastají.',
          ifPartiallyCorrect : '',
          ifNotCorrect : 'Kočky si na Tebe dají rundu.',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
    {
      name : 'Knihovna',
      mapImg : '/assets/buildings/library_icon.png',
      cardImg : '/assets/buildings/library.jpg',
      function : 'quizz',
      description : ['Nad knížkami potichoučku,', 'Sedí kočky pěkně v hloučku.', 'Najdi tu, co jde zapařit,', 'Má šanci nejvíc dalších nakazit.',],
      quizz : {
        name : 'Knihovna',
        pic : '/assets/quizzes/Library_riddle.png',
        text : 'Najdi kočku, co se po studiu setká s nejvíce kočkami.',
        answers : [
          {
            button : 'A',
            text : '',
            pic : '/assets/quizzes/cat_black.png',
            points : 0,
          }, 
          {
            button : 'B',
            text : '',
            pic : '/assets/quizzes/cat_grey.png',
            points : .2,
          },
          {
            button : 'C',
            text : '',
            pic : '/assets/quizzes/cat_sick.png',
            points : 1,
          },
          {
            button : 'D',
            text : '',
            pic : '/assets/quizzes/cat_healthy.png',
            points : .6,
          }, 
        ],
        solution : 'C',
        hint : {
          text : 'Každý obrázek reprezentuje jeden znak',
          pic : '',
        },
        isSolved : false,
        result : {
          ifCorrect : 'Atmosféra na párty byla toxická.',
          ifPartiallyCorrect : 'Společenská kočka vypadá jinak.',
          ifNotCorrect : 'Tos teda netrefil.',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
    {
      name : 'Park',
      mapImg : '/assets/buildings/park_icon.png',
      cardImg : '/assets/buildings/park.jpg',
      function : 'quizz',
      description : ['V zahradě se kočky hřejou,', 'myši loví, pak se smějou.', 'Když do bludiště vyrazíš,', 'Kterou z koček nakazíš?',],
      quizz : {
        name : 'Park',
        pic : '/assets/quizzes/Garden_riddle.png',
        text : 'Ke kterým kočkám se dostaneš?',
        answers : [
          {
            button : 'A',
            text : '',
            pic : '/assets/quizzes/cat_black.png',
            points : 0,
          }, 
          {
            button : 'B',
            text : '',
            pic : '/assets/quizzes/cat_grey.png',
            points : 1,
          },
          {
            button : 'C',
            text : '',
            pic : '/assets/quizzes/cat_sick.png',
            points : 0,
          },
          {
            button : 'D',
            text : '',
            pic : '/assets/quizzes/cat_healthy.png',
            points : 0,
          }, 
        ],
        solution : 'B',
        hint : {
          text : 'Co chceš radit, hledej cestu!',
          pic : '',
        },
        isSolved : false,
        result : {
          ifCorrect : 'Zahrada teď patří myším.',
          ifPartiallyCorrect : '',
          ifNotCorrect : 'Máš smůlu, kočkám si slunění nepřekazil.',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
    {
      name : 'Továrna',
      mapImg : '/assets/buildings/factory_icon.png',
      cardImg : '/assets/buildings/factory.jpg',
      function : 'quizz',
      description : ['Jednou týdně, v sobotu,', 'Mají kočky robotu.', 'Když už si tu dneska s nima,', 'Které číslo černá skrývá?',],
      quizz : {
        name : 'Továrna',
        pic : '/assets/quizzes/Factory_riddle.png',
        text : 'Které číslo hlídá černá kočka?',
        answers : [
          {
            button : 'A',
            text : '1',
            pic : '',
            points : 0,
          }, 
          {
            button : 'B',
            text : '3',
            pic : '',
            points : 0,
          },
          {
            button : 'C',
            text : '6',
            pic : '',
            points : 0,
          },
          {
            button : 'D',
            text : '9',
            pic : '',
            points : 1,
          }, 
        ],
        solution : 'D',
        hint : {
          text : 'Zde platí pravidla jako u klasického sudoku. Navíc v každé barevné skupince vidíš součet čísel v ní obsažených (čísla ve skupince nesmí být stejná).',
          pic : '',
        },
        isSolved : false,
        result : {
          ifCorrect : 'Černá kočka jde s virem domů.',
          ifPartiallyCorrect : '',
          ifNotCorrect : 'Matematika Ti moc nejde...',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
    {
      name : 'Obchoďák',
      mapImg : '/assets/buildings/shopping_mall_icon.png',
      cardImg : '/assets/buildings/shopping_mall.jpg',
      function : 'quizz',
      description : ['Kočky rády shopuji,', 'Mlíčko si zde kupují.', 'Taky pasti, sýr a máslo,', 'Kolik se jich v krámě sešlo?',],
      quizz : {
        name : 'Obchoďák',
        pic : '/assets/quizzes/Mall_riddle.png',
        text : 'Kolik koček je v obrázku ukrytých?',
        answers : [
          {
            button : 'A',
            text : '11',
            pic : '',
            points : .3,
          }, 
          {
            button : 'B',
            text : '12',
            pic : '',
            points : .6,
          },
          {
            button : 'C',
            text : '13',
            pic : '',
            points : 1,
          },
          {
            button : 'D',
            text : '14',
            pic : '',
            points : 0,
          }, 
        ],
        solution : 'C',
        hint : {
          text : 'Některé kočky se rády schovávají',
          pic : '',
        },
        isSolved : false,
        result : {
          ifCorrect : 'Bystré oko, to se hned pozná.',
          ifPartiallyCorrect : 'Mršky se Ti schovaly.',
          ifNotCorrect : 'Už z těch koček blbneš, tolik jich tam není.',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
  ],
}

export default data;