// Global Variables
// crystals
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var crystalFive;



// wins and losses
var win = 0;
var loss = 0;
// Scores
var scoreToGuess;
var scoreOfUser = 0;


function begin () {
	crystalOne = Math.floor(Math.random() * 20) + 1;
	crystalTwo = Math.floor(Math.random() * 20) + 1;
	crystalThree = Math.floor(Math.random() * 20) + 1;
	crystalFour = Math.floor(Math.random() * 20) + 1;
	crystalFive = Math.floor(Math.random() * 20) + 1;

	scoreToGuess = Math.floor(Math.random() * 9)+ 100;
	scoreOfUser = 0;
	$("#userScore").text(scoreOfUser);
	$("#numberToGuess").text(scoreToGuess);

	
console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);
console.log(crystalFive);
console.log(scoreToGuess);


	
};

$("#crystalOne").on("click", function () {
	var pop = crystalOne + scoreOfUser;
	console.log(pop);
	scoreOfUser = pop;
	$("#userScore").text(scoreOfUser);
	if (scoreOfUser == scoreToGuess) {
		win++;
		alert("You Win!");
		$("#wins").text(win);
		begin();

	} else if (scoreOfUser > scoreToGuess) {
		loss++;
		alert("You Lose!");
		begin();
	}
});
$("#crystalTwo").on("click", function () {
	var pop = crystalTwo + scoreOfUser;
	console.log(pop);
	scoreOfUser = pop;
	$("#userScore").text(scoreOfUser);
	if (scoreOfUser == scoreToGuess) {
		win++;
		alert("You Win!");
		$("#wins").text(win);
		begin();
	} else if (scoreOfUser > scoreToGuess) {
		loss++;
		alert("You Lose!");
		$("#losses").text(loss);
		begin();
	}
});
$("#crystalThree").on("click", function () {
	var pop = crystalThree + scoreOfUser;
	console.log(pop);
	scoreOfUser = pop;
	$("#userScore").text(scoreOfUser);
	if (scoreOfUser == scoreToGuess) {
		win++;
		alert("You Win!");
		$("#wins").text(win);
		begin();
	} else if (scoreOfUser > scoreToGuess) {
		loss++;
		alert("You Lose!");
		$("#losses").text(loss);
		begin();
	}
});
$("#crystalFour").on("click", function () {
	var pop = crystalFour + scoreOfUser;
	console.log(pop);
	scoreOfUser = pop;
	$("#userScore").text(scoreOfUser);
	if (scoreOfUser == scoreToGuess) {
		win++;
		alert("You Win!");
		$("#wins").text(win);
		begin();
	} else if (scoreOfUser > scoreToGuess) {
		loss++;
		alert("You Lose!");
		$("#losses").text(loss);
		begin();
	}
});
$("#crystalFive").on("click", function () {
	var pop = crystalFive + scoreOfUser;
	console.log(pop);
	scoreOfUser = pop;
	$("#userScore").text(scoreOfUser);
	if (scoreOfUser == scoreToGuess) {
		win++;
		alert("You Win!");
		$("#wins").text(win);
		begin();
	} else if (scoreOfUser > scoreToGuess) {
		loss++;
		alert("You Lose!");
		$("#losses").text(loss);
		begin();
	}
});
begin();

function end () {
	if (scoreOfUser == scoreToGuess) {
		alert("You Win!");
		begin();
	} else if (scoreOfUser > scoreToGuess) {
		alert("You Lose!");
		begin();
	}
};
end();
