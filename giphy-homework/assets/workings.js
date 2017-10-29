// array for buttons
$(function(){
	creation();
});
var buttons = ["apple", "banana", "orange", "lime", "papaya", "kiwi"];

// fun to create buttons
function creation () {
	for (var i = 0; i < buttons.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("theButtons btn btn-primary");
		newButton.text(buttons[i]);
		$("#buttonsHere").append(newButton);

	}
};

// for loop to create new buttons



var animal;
var api_key = "api_key=FrlzGAKCeKQWDPVoHBReubqtQSHig5uF";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&" + api_key + "&limit=10";

$(document).on("click",".theButtons", function (){
	$("#putGiphyHere").empty();
	animal = $(this).text();
	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&" + api_key + "&limit=10";

console.log(queryURL);
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response);
	var r = response.data;

	for (var i = 0; i < 10; i++) {
		var still = response.data[i].images.fixed_height_still.url;
		var animate = response.data[i].images.fixed_height.url;
		var newDiv = $("<div>");
		var rating =$("<p>");
		rating.html("<h3>" + response.data[i].rating + "</h3>");
		newDiv.append(rating);
		
		
		var img = $("<img>");
		img.attr("src", still);
		img.attr("data-Still", still);
		img.attr("data-Animate", animate);
		img.attr("data-state", 'still');
		img.addClass("images");
		newDiv.append(img);
		$("#putGiphyHere").append(newDiv);
		console.log(response.data[i].images.fixed_height.url);

	}

$(".images").on("click", function() {
	var state = $(this).attr("data-state"); 
	
	if (state === 'still') {
		$(this).attr("src", $(this).attr("data-Animate"));
		$(this).attr("data-state", 'animate');		
	} else    {
		$(this).attr("src", $(this).attr("data-Still"));
		$(this).attr("data-state", 'still');
	}
});
});


});

$("#submitThis").on("click", function() {
	$("#buttonsHere").empty();
	var newAnimal =	$("#newAnimal").eq(0).val().trim();
	buttons.push(newAnimal);
	creation();
	return false;
});

// onclick to animate buttons

// onclick to submit new buttons


