var point = require('point');
var pull = require('pull-stream');
var observe = require('..');

pull(
  observe(point(document)),
  pull.log()
);