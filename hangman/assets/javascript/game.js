
var words = ["obiwan", "anakin", "skywalker", "luke", "jabba", "leia", "yoda", "windu"]
var word = "";
var blanks = [];
var wordLetters = [];
var both = [];
var wrong = [];
var userInput = "";
var wins = 0;
var loss = 0;
var guessLeft = 10;









document.onkeyup = function (event) {

	userInput = event.key;
	// console.log(userInput);
	isItInThere();
	
	newRound();
};
function simplyBegin () {
	word = words[Math.floor(Math.random() * words.length)];
	console.log(word);
	wordLetters = word.split("");
	console.log(wordLetters);
	blanks = wordLetters.length;
	console.log(blanks);
both = [];
for (var i = 0; i < wordLetters.length; i++) {
	both.push("_");
}
console.log(both);
wrong = [];
guessLeft = 10;
document.getElementById("numBlanks").innerHTML = both.join(" ");
document.getElementById("guessed").innerHTML = wrong;
document.getElementById("left").innerHTML = guessLeft;




};

function isItInThere() {
	var ifCorrect = false;
	for (var i = 0; i < wordLetters.length; i++) {
		if(wordLetters[i]  === userInput) {
			console.log("correct");
			ifCorrect = true;

		}
	}
	if (ifCorrect == true) {
		for (var i = 0; i < wordLetters.length; i++) {
			if (wordLetters[i] === userInput) {
				both[i] = userInput;
	
			}

		}
	} else {

		wrong.push(userInput);
		guessLeft --;

	}

console.log(both);
console.log(wrong);
console.log(guessLeft);

};
function  newRound () {


	document.getElementById("numBlanks").innerHTML = both;
	document.getElementById("guessed").innerHTML = wrong;
	document.getElementById("left").innerHTML = guessLeft;
	document.getElementById("numBlanks").innerHTML = both.join(" ");
	if (wordLetters.toString() === both.toString()) {
		wins++;
		alert("Done well you have!");
		document.getElementById("winner").innerHTML = wins;
		simplyBegin();
	} else if (guessLeft == 0) {
		loss++;
		alert("Sad day.");
		document.getElementById("loser").innerHTML = loss;
		simplyBegin();
	}
};

simplyBegin();





	





