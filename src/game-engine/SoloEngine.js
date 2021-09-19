import React from "react";
import { Deck } from "../types/card-types";
import { CardView } from "../componets/card-view";
import { RestWarpper } from "../rest-wrapper/rest-wrapper";
import {soloState, buttonAction} from "../constants";

export default class SoloEngine extends React.Component
{
    constructor(props) 
    {
         super(props);

        // NOTE: Change the raw ints to an enum
         this.state = {
            card: "None cards drawn", 
            deck: new Deck(1),
            gameState: 0
         }

         this.state.deck.initDeck();
         this.state.deck.shuffle();


         this.displayCards = [];     // NOTE: This is a debug element and will be removed
 
         this.seeCard = this.seeCard.bind(this);
         this.renderCardView = this.renderCardView.bind(this);
         this.resetGame = this.resetGame.bind(this);
         this.renderGame = this.renderGame.bind(this);
         this.setGameState = this.setGameState.bind(this);
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
        this.displayCards.push(<CardView card={card} isHidden={false}/>);
        this.setState(state => ({
            card: card,
            deck: deckInst
        }));
    }

    setGameState(gameState)
    {
        this.setState({gameState:gameState});
    }

    playGame()
    {
        alert(this.props.controlFlag)
        if (this.props.controlFlag === buttonAction.RESET)
        {
            this.setGameState(soloState.NEW);
            return "RESET"
        }
        return "THIS IS WHERE THE SOLO GAME IS TRIGGERED"
        // Draw Player and Dealer's cards
        // User makes a button select. BE SURE TO HAVE ERROR HANDLING!!!!!!
            // Hit gives a card 1
            // Stand triggers the next steps 2
            // Double just adds a flat down card. AKA its like a Stand 4
            // Split needs an animation to switch. AKA THIS WILL BE THE HARDEST 3
        // Dealers plays
        // Add betting to system for wins and losses
            // Need a simple UI for SoloView for betting
    }

    renderGame()
    {
        
        // NOTE: Change the raw ints to an enum
        switch (this.state.gameState)
        {
            case soloState.NEW:
                return <div>
                        <button onClick={() => this.setGameState(soloState.PLAY)}>New Game</button>
                </div>
            case soloState.PLAY:
                return <div class="topContainer">
                        {this.playGame()}
                </div>
            case soloState.END:
                return <div>END STATE</div>
            default:
                return <div>
                    {RestWarpper.get_user_info()["name"]}: Remaning cards in deck is {this.state.deck.cards.length}
                    <div class="topContainer">
                        {this.renderCardView()}
                    </div>
                    <div class="topContainer">
                        {this.renderCardView()}
                    </div>
                </div>
        }
    }

    render()
    {
        return (
            <div> {this.renderGame()} </div>
        )
    }
}