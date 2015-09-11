# cli-command-parser [![Build Status](https://travis-ci.org/leahciMic/cli-command-parser.svg?branch=master)](https://travis-ci.org/leahciMic/cli-command-parser)

## Install

```sh
npm install --save cli-command-parser
```

## Usage

```js
var cliCommandParser = require('cli-command-parser');
console.log(cliCommandParser('ls -lh'));

// outputs ['ls', '-lh']
```
