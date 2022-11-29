import React, { Component, ErrorInfo, Fragment, ReactElement } from 'react';
//import { JsxEmit } from 'typescript';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import Hero from '../components/hero/Hero';
import './App.css';

// class Frag extends Component<{ children: ReactElement[] }, {}>{
//   render(): React.ReactNode {
//     return this.props.children
//   }
// }

function App() {
  const nested1 = <span>This is Child</span>
  const nested2 = <br />
  const nested3 = <span>This is another</span>
  const heroElement = Hero({ heroName: 'Batman', children: [nested1, nested2, nested3] })
  return (
    <>
      <Hero heroName='Batman'>
        <span>This is children</span>
        <br />
        <span>This is another</span>
      </Hero>
      {/* {
        heroElement
      } */}
      <br />
      <Hero heroName='Superman' />
      <br />
      <Hero heroName='Joker' />
    </>
  );
}

export default App;


