import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Grid from './components/Grid';
import Article from './components/Article';
import componentScrollTop from './utils/componentScrollTop';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Grid} />
          <Route path="/article/:article"  component={componentScrollTop(Article)}/>
          <Redirect from="/:something" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
