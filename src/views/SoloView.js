import React from "react"
import { Deck } from "../types/card-types"
import { CardView } from "../componets/card-view"

export class SoloView extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {card: "None cards drawn", deck: new Deck(1), };
        this.state.deck.initDeck();
        this.state.deck.shuffle();
        this.displayCards = [];     // NOTE: This is a debug element and will be removed

        this.seeCard = this.seeCard.bind(this);
        this.renderCardView = this.renderCardView.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() 
    {
        let newDeck = new Deck(1)
        newDeck.initDeck();
        newDeck.shuffle();

        this.setState(state => ({
            card: "None cards drawn", 
            deck: newDeck,
        }));

        this.displayCards = [];
    }

    renderCardView() 
    {
        if (this.state.deck.cards.length <= 0 ) return <button onClick={this.resetGame}> Reset the application </button>;

        return this.displayCards;
    }

    seeCard() 
    {
        let card = this.state.deck.dealCard();
        let deckInst = this.state.deck;
        this.displayCards.push(<CardView card={card} />);
        this.setState(state => ({
            card: card,
            deck: deckInst
        }));
    }

    render()
    {
        return (
            <div className="SoloView-body">
                Remaning cards in deck is {this.state.deck.cards.length}
                <div class="topContainer">
                    {this.renderCardView()}
                </div>
                {/* TODO WORK ON THESE FUCKING BUTTONS!!!!! */}
                <div class="topContainer">
                    <button onClick={this.seeCard}>Hit</button>
                    <button onClick={() => alert("Doesn't work yet")}>Stand</button>
                    <button onClick={() => alert("Doesn't work yet")}>Double</button>
                    <button onClick={() => alert("Doesn't work yet")}>Split</button>
                    <button onClick={this.resetGame}>Reset</button>
                </div>
            </div>
          );
    }
}

export default SoloView;