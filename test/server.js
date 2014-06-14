var server = require("../server"),
    requestHandler = require("../requestHandler"),
    http = require('http'),
    DOMParser = require('xmldom').DOMParser,
    assert = require('chai').assert,
    expect = require('chai').expect;

before(function() {
    server.start(requestHandler.handleRequest);
});

describe('GET /', function() {
    it('should return 200', function(done) {
        /* TODO: port via config */
        http.get('http://127.0.0.1:8888', function(res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should be valid xml', function() {
        http.get('http://127.0.0.1:8888', function(res) {
            var data = '';

            res.on('data', function(chunk) {
                data += chunk;
            });

            res.on('end', function() {
                /*jshint expr: true*/
                expect(data).to.be.String;
                expect(function() {
                    new DOMParser.parseFromString(data);
                }).to.not.throw();
                done();
            });
        });
    });
});