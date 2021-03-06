import logo from './logo.svg';
import './App.css';
const deckCreater = require("./types/card-types")

function App() {

  function seeCard()
  {
    var asdf = deckCreater.createShoe(1);
    asdf.initDeck();
    asdf.shuffle();
    var fdsa = asdf.dealCard();
    return `${fdsa.face} ${fdsa.suite}`;
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {seeCard()}
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
