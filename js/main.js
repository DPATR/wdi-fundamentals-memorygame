console.log("Up and running!");
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
// console.log(cardsInPlay); // not sure if I need to use an index or not
console.log(cardsInPlay);
console.log("User flipped" + " " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert('Sorry, try again.');
	}
}