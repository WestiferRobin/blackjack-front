// // NOTE: THIS CODE WILL NOT BE USED BUT WILL BE HELD AS REFERENCE
// const deckCreater = require('./card-types.js');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function initalizeGame()
// {
//     rl.question("How many decks do you want to use? ", (answer) => {
//         var shoe = deckCreater.createShoe(parseInt(answer));
    
//         shoe.initDeck();
//         shoe.shuffle();
    
//         console.log(`${shoe.id} ${shoe.cards.length}`)
    
//         var card = shoe.dealCard();
    
//         console.log(`${card.face} ${card.suite}`);
    
//         rl.question("do you wanna leave? ", (answer) => {
//             if (answer == 'Y' || answer == 'y') rl.close();
//             initalizeGame();
//         });
//     });
// }

// console.log("Welcome to Blackjack!");
// initalizeGame();

// rl.on("close", function() {
//     console.log("Thanks for playing!");
//     process.exit(0);
// });
