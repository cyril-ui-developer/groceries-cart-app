import React, { Component } from 'react';
import './App.css';
import ListItems from './containers/ListItems';
//import FriendsContainer  from './containers/test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
        <ListItems  />
        </div>
      </div>
    );
  }
}

export default App;
