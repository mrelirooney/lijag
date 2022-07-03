import './App.css';
import { Button } from './components/Button';
import React from 'react';
import { useState } from 'react';

// This video kinda helped with the calculations
// https://www.youtube.com/watch?v=oiX-6Y2oGjI

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
     result = updateCalc + result;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString()
      );
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='LvlSection'>
          <p id="currentLvl">17</p>
          <svg id="LvlMeter" width="100%" height="20">
            <rect width="100%" height="20" fill="#ccc" rx="2" ry="2"></rect>
            <rect width="50%" height="20" fill="#0078bc" rx="2" ry="2"></rect>
          </svg>  
          <p id="nextLvl">18</p>
        </div>
        <div>
          { result ? <span>({result})</span> : '' } 
          &nbsp;
          { calc || "0" }
        </div>
        <br></br>
        <div className='buttonSection'>
          <Button onClick={() => updateCalc('100')} type="button"
          buttonStyle="btn--warning--outline"
          buttonSize="btn--large">100</Button>
          <Button onClick={() => updateCalc('200')} type="button" 
          buttonStyle="btn--warning--outline"
          buttonSize="btn--large">200</Button>
          <Button onClick={() => updateCalc('300')} type="button" 
          buttonStyle="btn--warning--outline"
          buttonSize="btn--large">300</Button>
          
        </div>
      </header>
      <body className="App-body">
        <p>lol</p>
      </body>
      <footer className="App-footer">

      </footer>
    </div>
    
  );
}

export default App;
