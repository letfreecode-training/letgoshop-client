import React, { Component } from 'react';
import './styles/App.css';
import TopBar from './components/TopBar/TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
      </div>
    );
  }
}

export default App;
