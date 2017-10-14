var request = require('request');

function movieSearch(userInput) {
	let movieTitle = userInput;

	let url = 'http://www.omdbapi.com/?t=' + movieTitle + '&y=&plot=long&tomatoes=true&r=json&apikey=40e9cece';
	
	request(url, function(error, response, body) {
		console.log("************  Movie  *************");
		console.log("Title: " + JSON.parse(body)["Title"]);
		console.log("Title Year: " + JSON.parse(body)["Year"]);
		console.log("Title Plot: " + JSON.parse(body)["Plot"]);
	});
};

// Arguments
var userCommand = process.argv[2];
var userInput = process.argv[3];

//runs the movie search
if (userCommand === 'movie-search'){
	//Adds all words together. 
	for(i=4; i<process.argv.length; i++){
		userInput += '+' + process.argv[i];
	}
	movieSearch(userInput);
}