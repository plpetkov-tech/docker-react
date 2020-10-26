import man from './man.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={man} className="App-logo" alt="logo" />
        <p>
           Changed from Travis CI
        </p>
        <p>
           New feature
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
