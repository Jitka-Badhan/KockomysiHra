import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { useImmer } from 'use-immer';
import './style.css';
import data from './data';

import Home from './components/Home';
import Intro from './components/Intro';
import Game from './components/Game';
import Rules from './components/Rules';
import GameOver from './components/GameOver';

const App = () => {
  const [myData, setMyData] = useImmer(data);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route exact path="/game">
            <Game myData={myData} setMyData={setMyData} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route exact path="/game-over">
            <GameOver myData={myData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
