console.log("Up and running!");

//Arrays below have Global scope
//cards = ["queen", "queen", "king", "king"];
cards = [
{
	rank:"queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank:"king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
cardsInPlay = [];

invalidSelection = function() {
	alert("Click on the 'Reset Game' button to refresh the browser and select only 2 cards to play this game!");
}

//var flipCard = function(cardID) {
var flipCard = function() {
	var cardID = this.getAttribute("data-id"); //this is used to access the card that was clicked
	console.log(cardsInPlay);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute("src", cards[cardID].cardImage);
	if (cardsInPlay.length > 2) {
			invalidSelection();
	} else {
	if (typeof cardsInPlay[1] !== 'undefined') {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert('Sorry, try again.');
		}
	    }
    }
}

var clickReset = function() {
	//alert('Button has been clicked!');
	window.location.reload();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		var button = document.querySelector('button');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i); //data- attributes store data about an element that is not tied to CSS style
		cardElement.addEventListener('click', flipCard);
		button.addEventListener('click',clickReset);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//flipCard(0);
//flipCard(2);
createBoard();

