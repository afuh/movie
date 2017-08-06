import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';
import Movie from './Movie';
import Show from './Show';
import Person from './Person';
import Search from './Search';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/m/:id" component={Movie} />
          <Route path="/tv/:id" component={Show} />
          <Route path="/p/:id" component={Person} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
