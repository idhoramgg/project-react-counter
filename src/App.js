import React from 'react';
import './App.css';
import OperatorState from './components/operatorState.js'
import Header from './components/Header'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Header />
      <OperatorState />
      <List name="Ridho" age="25">
      <form></form>
      </List>
    </div>
  );
}

export default App;
