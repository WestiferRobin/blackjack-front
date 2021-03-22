
const cardFaces = [
    'A', '2', '3', 
    '4', '5', '6', 
    '7', '8', '9', 
    '10', 'J', 'Q', 'K'
];

export const spade = '\u{2660}';
export const heart = '\u{2665}';
export const club = '\u{2663}';
export const diamond = '\u{2666}';

const cardSuits = [
    spade, heart, club, diamond
];

export class Card {
    constructor(face, suite, id) {
        this.face = face;
        this.suite = suite;
        this.cardId = id;
    }
}

export class Deck {

    constructor(deckSize, deckId = 0) {
        this.deckSize = deckSize;
        this.cards = [];
        this.deckId = deckId;
        this.cards = [];
    }
    
    dealCard() {
        if (this.cards.length === 0) {
            return;
        }
        return this.cards.shift();
    }

    initDeck() {
        let assignId = 0;
        let offset = this.deckSize;

        while (offset > 0) {
            cardFaces.forEach(face => {
                cardSuits.forEach(suite => {
                    this.cards.push(new Card(face, suite, assignId));
                    assignId++;
                });
            });
            offset--;
        }
    }

    shuffle() {
        this.cards.sort(() => 0.5 - Math.random());
    }
}