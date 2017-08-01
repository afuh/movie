import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
