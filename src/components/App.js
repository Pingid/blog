import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import ArticleList from './ArticleList';
import Article from './Article';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Route path="/" exact={true} component={ArticleList} />
            <Route path="/essays/:article" component={Article}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
