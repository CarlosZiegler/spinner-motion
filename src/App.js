import React from 'react';
import Spinner from './components/Spinner'

function App() {
  return (<>
    <div className="App">
      <Spinner duration={0} ><h1>L</h1></Spinner>
      <Spinner duration={0.1} ><h1>O</h1></Spinner>
      <Spinner duration={0.2} ><h1>F</h1></Spinner>
      <Spinner duration={0.3} ><h1>I</h1></Spinner>
      <Spinner duration={0.4} ><h1>N</h1></Spinner>
      <Spinner duration={0.5} ><h1>O</h1></Spinner>
    </div >
  </>
  );
}

export default App;
