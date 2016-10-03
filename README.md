# consoleMock

[![Build Status](https://travis-ci.org/f-xyz/console-mock.svg)](https://travis-ci.org/f-xyz/console-mock)

Mocked console.log, .info, .table, etc. for node and browsers.

```javascript
// basic use
var consoleMock = require('console-mock');
var console = consoleMock.create();
console.log(1, 2, 3); // 1 2 3

// disabling output
consoleMock.enabled(false); // disables output, but internal history is still written
console.log(3, 2, 1); // does nothing

// retrieving history
var history = consoleMock.history();
console.log(history); // does nothing
consoleMock.enabled(true); // enables output
console.log(history); // outputs:
// [ { method: 'log', arguments: [ 1, 2, 3 ] },
//   { method: 'log', arguments: [ 3, 2, 1 ] } ]

// clearing history
console.historyClear()
console.log(consoleMock.history()); // outputs: []
```