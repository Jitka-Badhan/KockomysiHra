const data = {
  intro : [{
    id : 0,
    img : '/assets/photos/photo-like-rectangle.png', 
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
      img : '/assets/photos/photo-like-rectangle.png', 
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
        img : '/assets/photos/photo-like-rectangle.png', 
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
          img : '/assets/photos/photo-like-rectangle.png', 
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
            points : cislo,
          },
          {
            button : 'C',
            text : '',
            pic : '/assets/quizzes/cat_sick.png',
            points : cislo,
          },
          {
            button : 'D',
            text : '',
            pic : '/assets/quizzes/cat_healthy.png',
            points : cislo,
          }, 
        ],
        solution : 'A',
        hint : {
          text : '',
          pic : '/assets/photos/photo-like_square.png',
        },
        isSolved : false,
        result : {
          ifCorrect : '',
          ifPartiallyCorrect : '',
          ifNotCorrect : '',
        }
      },
      indication : {
        isPresent : false,
        pic : '',
        description : '',
      },
      isActive : false,
    },
}