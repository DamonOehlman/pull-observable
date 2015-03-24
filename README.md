# pull-observable

This is a [pull-stream](https://github.com/dominictarr/pull-stream) 
source that works with anything that implements
[observable](https://github.com/dominictarr/observable) behaviour.

While observable is perhaps not an ideal fit for a pull-stream source it
does enable you to make use of existing throughs and sinks which means 
you can do some cool things.


[![NPM](https://nodei.co/npm/pull-observable.png)](https://nodei.co/npm/pull-observable/)

[![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/dominictarr/stability#experimental) [![bitHound Score](https://www.bithound.io/github/DamonOehlman/pull-observable/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/pull-observable) 

## Example Usage

This is a simple example using
[point](https://github.com/DamonOehlman/point):

```js
var point = require('point');
var pull = require('pull-stream');
var observe = require('pull-observable');

pull(
  observe(point(document)),
  
  // only accept events that are below 200, 200
  pull.filter(function(args) {
    return args[0] < 200 && args[1] < 200;
  }),
  pull.log()
);
```

## License(s)

### MIT

Copyright (c) 2015 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
