Sparkle.js
==========

Node.js backend for sparkle system informations

## Setup
### Install dependencies
Install all [dependencies](#dependencies) with `npm`:

```
npm install
```

### Set up configuration
Configure the `config/default.json` file to your needs. First, make sure the path to your desired appcast.xml is correct.

WARNING: **Every** possible file that you set here will be deployed. That means, if you put `/usr/passwd` in there, Sparkle.js will show it to everyone that navigates to your server (if it is readable of course).

### Logging the system stats
Sparkle.js knows two ways of saving the given sets of information.

* [SQLite](#sqlite)
* [stdout](#stdout)

#### SQLite
TO use SQLite for logging set `0` to the key `stdout` to the key `stdout` in the section `Logging` in the config-file.

```
"Logging" : {
	"stdout" : "0"
}
```
TODO

#### stdout
If you want to use `stdout` for logging, set `1` to the key `stdout` in the section `Logging` in the config-file.
```
"Logging" : {
	"stdout" : "1"
}
```

This way, you could send all the output to a logfile:
```
> node index.js >> sparkle-js.log
```

Every requests looks like this.
```
{
	"timestamp" : "1399930754601",
	"parameter" : "{"OSX":"10.10"}"
}
```

* `timestamp` is the servers timestamp at the moment of receiving the request.
* `parameter` hols the GET parameters encoded in JSON.

### Starting
When you're ready to go, just start node like this (in the Sparkle.js directory):

```
node index.js
```

## Dependencies
Right now, `Sparkle.js` depends on the following `node.js` modules:

* [Moment.js](http://momentjs.com)
* [Node-config](http://lorenwest.github.com/node-config/)