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
Configure the `config/default.json` file to your needs.
First, make sure the path to your desired appcast.xml is correct.

WARNING: **Every** possible file that you set here will be deployed. That means, if you put `/usr/passwd` in there, Sparkle.js will show it to everyone that navigates to your server (if it is readable of course).

### Logging the system stats
Either you want to use SQLlite (not implemented yet) or every set of information (say request) gets logged to stdin.

Thus, you could just send the output to a file:

```
> node index.js >> sparkle-js.log
```

### Starting
When you're ready to go, just start node like this (in the Sparkle.js directory):

```
node index.js
```

## Dependencies
Right now, `Sparkle.js` depends on the following `node.js` modules:

* [Moment.js](http://momentjs.com)
* [Node-config](http://lorenwest.github.com/node-config/)