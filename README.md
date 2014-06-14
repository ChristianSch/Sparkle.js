Sparkle.js
==========

Node.js backend for sparkle system informations

## Setup
First grab a copy of the most recent code: [here](https://github.com/ChristianSch/Sparkle.js/archive/master.zip) and unzip it.

### Install dependencies
Install all [dependencies](#dependencies) with `npm`:

```
npm install
```

### Set up configuration
Configure the `config/default.json` file to your needs. First, make sure the path to your desired appcast.xml is correct.

WARNING: **Every** possible file that you set here will be deployed. That means, if you put `/usr/passwd` in there, Sparkle.js will show it to everyone that navigates to your server (if it is readable of course).

Then you can easily remove the `Sample Appcast.xml` from the directory.

### Logging the system stats
Sparkle.js knows two ways of saving the given sets of information.

* [MongoDB](#mongodb)
* [stdout](#stdout)

#### MongoDB
To use MongoDB for logging set `0` to the key `stdout` to the key `stdout` in the section `Logging` in the config-file. Then set the proper `host` in the config section `Database`.

```
"Logging" : {
	"stdout" : "0"
}
```

You'd want to change the database host too:
```
"Database" : {
	"host" : "localhost:27017"
}
```

Note: If there was an error while inserting a record into the database, the record will be logged to stdout as fallback.

#### stdout
If you want to use `stdout` for logging as default, set `1` to the key `stdout` in the section `Logging` in the config-file.
```
"Logging" : {
	"stdout" : "1"
}
```

This way, you could send all the output to a logfile:
```
> node index.js >> sparkle-js.log
```

Every record looks like this:
```
{
	"timestamp" : "1399930754601",
	"ip" : "…"
	"parameters" : "{… JSON returned from parsing GET parameters …}",
}
```

* `timestamp` is the servers timestamp at the moment of receiving the request.
* `parameters` holds the GET parameters encoded in JSON.

### Starting
When you're ready to go, just start node like this (in the Sparkle.js directory):

```
node index.js
```

## Dependencies
Right now, `Sparkle.js` depends on the following `node.js` modules:

* [Node-config](http://lorenwest.github.com/node-config/)
* [MongoDB Node.JS Driver](https://github.com/mongodb/node-mongodb-native)