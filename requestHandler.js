var url = require('url'); // parse GET parameter
var config = require('config').Logging; // logging configuration
var dbConfig = require('config').Database; // database configuration

/*!
 * Write JSON string to stdout
 * @param  {[String]} json JSON string to print to stdout
 */
 function logToStdout(json) {
    if (json) {
        console.log(json);
    }
}

/*!
 * Insert the JSON data into the `records` document in the `sparkle-js` database.
 *
 * @discussion If there was an error using the database the output will be logged to
 * stdout as fallback.
 * 
 * @param  {[String]} json JSON string to log
 */
 function logToMongoDB(json) {
    var MongoClient = require('mongodb').MongoClient;

    /* connect to db and insert record */
    MongoClient.connect("mongodb://" + dbConfig.host + "/sparkle-js", function(err, db) {
        if (err) {
            /* failed to connect, log to stdout instead */
            console.log(err.errmsg);
            logToStdout(json); // fall back to stdout

        } else {
            db.collection('records').insert(JSON.parse(json), function(err, records) {
                if (err) {
                    /* failed to insert data, fall back to sdtout */
                    console.log(err.errmsg);
                    logToStdout(json);
                }
            });
        }
    });
}

/*!
 * Handle a HTTP request.
 *
 * @discussion The GET parameters *should be* given by the sparkle
 * framework making the request. These key value pairs get saved to
 * either stdout or a mongodb with stdout as fallback.
 * 
 * @param  {[Object]} request HTTP request
 */
 function handleRequest(request) {
    var parsedURL = url.parse(request.url, true); // true: get query as object

    var json = "{\"timestamp\":" + Date.now() + ","
    + "\"parameters\":" + JSON.stringify(parsedURL.query) + ","
    + "\"ip\":\"" + request.connection.remoteAddress + "\"}";

    if (config.stdout != 1) {
        logToMongoDB(json);

    } else {
        logToStdout(json);
    }
}

exports.handleRequest = handleRequest;