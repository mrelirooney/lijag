import './App.css';
import { Button } from './components/Button';



function App() {
  let totalValue = 200 + 400;
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
          <p>{totalValue}</p>
        </div>
        <div className='buttonSection'>
          <Button onClick={() => {console.log("This is worth 100")}} type="button"
          buttonStyle="btn--warning--outline"
          buttonSize="btn--large">100</Button>
          <Button onClick={() => {console.log("This is worth 200")}} type="button" 
          buttonStyle="btn--warning--outline"
          buttonSize="btn--large">200</Button>
          <Button onClick={() => {console.log("This is worth 300")}} type="button" 
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
