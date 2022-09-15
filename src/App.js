import './App.css';
import logo from './images/logo.png';
import MainLogo from './images/logo2.svg';

function App() {
  return (
    
    <div className="App">


      
      <div className="Loading">
        <img src={MainLogo} className="Main-logo" alt="logo"/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Bundle</p>
        <p>Work in progress</p>
      </header>
    </div>
  );
}


export default App;
