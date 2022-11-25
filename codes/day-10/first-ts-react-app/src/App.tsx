import React from 'react';
import './App.css';
import { SamplePropTypes } from './propTypes.model';
import SampleCls from './SampleCls';

import SampleFunctionalComp from './SampleFunctionalComp';


const call = () => {
  return 'React JS'
}
function App() {
  const myProps: SamplePropTypes = {
    value: 10,
    callFn: call,
    strValue: 'Joydip'
  }
  // const obj = new SampleCls({ value: 100 })
  //SampleFunctionalComp({ propObj: myProps })

  return (
    <div className="App">
      <SampleFunctionalComp propObj={myProps} />
      <br />
      <SampleCls value={100} />
    </div>
  );
}

export default App;
