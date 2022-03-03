import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { OverviewCounter } from './features/overview/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <br></br>
        <OverviewCounter />
      </header>
    </div>
  );
}

export default App;
