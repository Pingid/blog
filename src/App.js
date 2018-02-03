import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Grid from './components/Grid';
import Article from './components/Article';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Route path="/" exact={true} component={Grid} />
            <Route path="/article/:article" component={Article}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
