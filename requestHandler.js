var moment = require('moment'); // time and date formatting
var url = require('url'); // parse GET arguments

function handleRequest(request) {
	var parsedURL = url.parse(request.url, true); // true: get query as object
	var arguments = JSON.stringify(parsedURL.query);

	console.log("received request at " + moment().format());

	if (arguments) console.log(arguments);
}

exports.handleRequest = handleRequest;