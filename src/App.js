import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import EssayView from './components/EssayView';
// import
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          Hello
          <Route path="/essays/:essayTitle" component={() => null}/>
        </div>
      </Router>
    );
  }
}

export default App;
