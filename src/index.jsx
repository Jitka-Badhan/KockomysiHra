import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './style.css';

import Home from './components/Home';
import Intro from './components/Intro';
import Game from './components/Game';
import Rules from './components/Rules';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
