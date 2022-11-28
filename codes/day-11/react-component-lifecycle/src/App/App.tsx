import React, { useState } from 'react';
import Parent from '../components/parent/Parent';
import './App.css';

function App() {
  console.log('App rendered');
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="App">
      <button onClick={
        () => {
          setShow(
            (oldStatus) => !oldStatus
          )
        }
      }>
        {show ? 'Hide' : 'Show'}
      </button>
      <br />
      {
        show && <Parent />
      }
    </div>
  );
}

export default App;
