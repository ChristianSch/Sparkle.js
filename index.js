var server = require("./server");
var requestHandler = require("./requestHandler");

server.start(requestHandler.handleRequest);
