var point = require('point');
var pull = require('pull-stream');
var observe = require('..');

pull(
  observe(point(document)),
  
  // only accept events that are below 200, 200
  pull.filter(function(args) {
    return args[0] < 200 && args[1] < 200;
  }),
  pull.log()
);