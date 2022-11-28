import React from 'react';
import Click from '../components/Click';
import Hover from '../components/Hover';
//import Parent from '../components/Parent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      <Click />
      <br />
      <br />
      <Hover />
    </div>
  );
}

export default App;
