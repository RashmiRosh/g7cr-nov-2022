import Calculator from '../components/calculator/Calculator';
import Sample from '../components/sample/Sample';
import './App.css';

function App() {
  //const calcElement = Calculator()

  // const sampleComponentObj = new Sample()
  // const sampleElement = sampleComponentObj.render()
  return (
    <div className="App">
      <Calculator />
      <br></br>
      {/*{sampleElement}*/}
      <Sample />
    </div>
  );
}

export default App;
