import './App.css';
import { Deck, spade, club, heart, diamond } from "./types/card-types"
import { CardView } from "./componets/card-view"
import React from 'react';

// TODO: format App to have different screens instead of ALL OF IT BEING IN APP.js!!!
export default class App extends React.Component {

  constructor(props) {
    super(props);

    
    this.state = {card: "None cards drawn", deck: new Deck(1), };
    this.state.deck.initDeck();
    this.state.deck.shuffle();
    this.displayCards = [];     // NOTE: This is a debug element and will be removed

    this.seeCard = this.seeCard.bind(this);
    this.renderCardView = this.renderCardView.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle() {
    var arraySuites = [spade, heart, diamond, club];
    var title = ""

    arraySuites.sort(() => 0.5 - Math.random());
    arraySuites.forEach(suite => {
      title += `${suite} `
    });
    title += "Welcome To Blackjack! "
    arraySuites.sort(() => 0.5 - Math.random());
    arraySuites.forEach(suite => {
      title += `${suite} `
    });

    return <p>{title}</p>
  }

  resetGame() {
    let newDeck = new Deck(1)
    newDeck.initDeck();
    newDeck.shuffle();

    this.setState(state => ({
      card: "None cards drawn", 
      deck: newDeck,
    }));

    this.displayCards = [];
  }

  renderCardView() {
    if (this.state.deck.cards.length <= 0 ) return <button onClick={this.resetGame}> Reset the application </button>;

    return this.displayCards;
  }

  seeCard() {
    let card = this.state.deck.dealCard();
    let deckInst = this.state.deck;
    this.displayCards.push(<CardView card={card} />);
    this.setState(state => ({
      card: card,
      deck: deckInst
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderTitle()}
          Remaning cards in deck is {this.state.deck.cards.length}
          <div class="topContainer">
            {this.renderCardView()}
          </div>
          <div class="topContainer">
              <button onClick={this.seeCard}>Hit</button>
              <button onClick={() => alert("Doesn't work yet")}>Stand</button>
              <button onClick={() => alert("Doesn't work yet")}>Double</button>
              <button onClick={() => alert("Doesn't work yet")}>Split</button>
              <button onClick={this.resetGame}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
}