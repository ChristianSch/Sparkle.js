var url = require('url'); // parse GET arguments
var config = require('config').Logging; // configuration

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sparkle-stats.db');

function handleRequest(request) {
	var parsedURL = url.parse(request.url, true); // true: get query as object
	var arguments = JSON.stringify(parsedURL.query);

	if (config.stdout != 1) {
		// log to database
		console.log("Not implemented yet!");

	} else {
		// log to stdout
		if (arguments) {
			console.log("{\n\t\"timestamp\" : \"" + Date.now() + "\",\n\t\"parameter\" : \"" + arguments + "\"\n}");
		}
	}
}

exports.handleRequest = handleRequest;