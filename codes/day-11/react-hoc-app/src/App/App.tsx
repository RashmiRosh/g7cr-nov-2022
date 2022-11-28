import React, { Component, Fragment } from 'react';
import Click from '../components/Click';
import Edit from '../components/edit/Edit';
import Hover from '../components/Hover';
import ProductList from '../components/product-list/ProductList';
import Toggle from '../components/toggle/Toggle';
//import Parent from '../components/Parent';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className='BorderStyles'>
        This is a div
      </div>
      <br /><br />
      <div className="App">
        {/* <Parent /> */}
        <Click x={100} />
        <br />
        <br />
        <Hover y={200} />
      </div>
      <br /><br />
      <Edit />
      <br />
      <br />
      <ProductList />
    </Fragment>
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
