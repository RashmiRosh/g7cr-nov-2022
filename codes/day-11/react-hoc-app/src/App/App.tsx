import React, { Component } from 'react';
import Click from '../components/Click';
import Hover from '../components/Hover';
//import Parent from '../components/Parent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      <Click x={100} />
      <br />
      <br />
      <Hover y={200} />
    </div>
  );
}

export default App;
/*
const utility1 = {
  add: (a: number, b: number) => a + b
}
const utility2 = {
  subtract: (a: number, b: number) => a - b
}

class X extends Component {
  render(): React.ReactNode {
    return 'hello'
  }
}
Object.assign(X.prototype, utility1, utility2)
*/
