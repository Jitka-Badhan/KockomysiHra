import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import './style.css';

import Home from './components/Home';
import Intro from './components/Intro';
import Game from './components/Game';
import Rules from './components/Rules';
import GameOver from './components/GameOver';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route exact path="/game-over">
            <GameOver />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
