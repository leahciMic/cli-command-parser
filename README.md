# cli-command-parser [![Build Status](https://travis-ci.org/leahciMic/cli-command-parser.svg?branch=master)](https://travis-ci.org/leahciMic/cli-command-parser)

Parses a string that is intended for `child_process#spawn` and returns an array
with the first value being the command to execute and the rest of the array
containing separated arguments.

It can handle escape sequences as well as quotes.

## Install

```sh
npm install --save cli-command-parser
```

## Usage

```js
var cliCommandParser = require('cli-command-parser');
console.log(cliCommandParser('ls -lh'));

// outputs ['ls', '-lh']

console.log(cliCommandParser('foo "some options" --test'));

// outputs ['foo', 'some options', '--test']
```
