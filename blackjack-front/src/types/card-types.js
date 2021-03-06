
const cardFaces = [
    'A', '2', '3', 
    '4', '5', '6', 
    '7', '8', '9', 
    '10', 'J', 'Q', 'K'
];

const cardSuits = [
    'H', 'D', 'S', 'C'
];

function Card(face, suite, id) {
    this.face = face;
    this.suite = suite;
    this.cardId = id;
}

function Deck(deckSize, deckId = 0) {

    this.deckSize = deckSize;

    this.cards = []

    this.deckId = deckId;

    this.cards = [];

    this.initDeck = () => {
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

    this.shuffle = () => this.cards.sort(() => 0.5 - Math.random());

    this.dealCard = () => {
        if (this.cards.length === 0)
        {
            console.log('there are no cards left');
            return;
        }
        return this.cards.shift();
    }
}


module.exports = {
    createShoe: function(size) {
        return new Deck(size, "ASDFASDF");
    }
}