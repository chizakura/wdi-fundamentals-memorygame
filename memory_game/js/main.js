var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}];
var cardsInPlay = [];
var totalCards = 0;
var score = 0;

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match! +2 Points");
		score += 2;
	} else {
		alert("Sorry, try again.");
	}
}

var getScore = function () {
	document.getElementById("score").innerHTML = "Score: " + score;
}

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	totalCards += 1;
	if (cardsInPlay.length === 2 && totalCards < 9) {
		checkForMatch();
		cardsInPlay.pop();
		cardsInPlay.pop();
		getScore();
	}
}

var createBoard = function () {
	document.getElementById("score").innerHTML = "Score: " + score;
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();