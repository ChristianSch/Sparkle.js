var http = require("http");
var fs = require('fs'); // file handling
var config = require('config').Appcast; // configuration

function start(handler) {
	function onRequest(request, response) {
  	handler(request); // handle request: save to database etc.

  	fs.readFile(config.path, {encoding: 'utf-8'}, function (err, data) {
  		if (err) {
  			response.writeHead(404, {"Content-Type":"text/plain"});
  			console.log(err);

  		} else {
  			response.writeHead(200, {"Content-Type": "text/xml"});
  			response.write(data);
  		}
  		
		response.end();
  	});
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;