var url = require('url'); // parse GET arguments

function handleRequest(request) {
	var parsedURL = url.parse(request.url, true); // true: get query as object
	var arguments = JSON.stringify(parsedURL.query);


	if (arguments) console.log(arguments);
}

exports.handleRequest = handleRequest;