console.log("Up and running!");

//Arrays below have Global scope
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log('Sorry, try again.');
		}
}

var flipCard = function(cardID) {
	console.log(cardsInPlay);
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cardID);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert('Sorry, try again.');
	}
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);

/*console.log("User flipped" + " " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert('Sorry, try again.');
	}
}*/