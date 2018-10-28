import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Result from './Routes/Result';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
        </main>
      </Router>
    );
  }
}

export default App;
