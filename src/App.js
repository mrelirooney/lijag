
import './App.css';

function App() {
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
        <div className='buttonSection'>
        <button onClick={Task}>Default</button>
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
function Task() {
  alert('You clicked me!');
}
export default App;
