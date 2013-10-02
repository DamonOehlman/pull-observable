/* jshint node: true */
'use strict';

var pull = require('pull-core');

/**
  # pull-observable

  This is a [pull-stream](https://github.com/dominictarr/pull-stream) 
  source that works with anything that implements
  [observable](https://github.com/dominictarr/observable) behaviour.

  While observable is perhaps not an ideal fit for a pull-stream source it
  does enable you to make use of existing throughs and sinks which means 
  you can do some cool things.

  ## Example Usage

  This is a simple example using
  [point](https://github.com/DamonOehlman/point):

  <<< examples/point.js
**/
module.exports = pull.Source(function(observable) {
  var buffer = [];
  var next = [];

  // hook up a listener to the observable
  var stop = observable(function(val) {
    // if we are waiting for a value provide it, otherwise buffer
    // ignore the initial undefined value
    val != undefined && (next.length ? next.shift()(null, val) : buffer[buffer.length] = val);
  });

  return function(end, cb) {
    if (end) {
      stop();
      return cb(end);
    }

    // if we have items in the buffer, return the first
    if (buffer.length) {
      return cb(false, buffer.shift());
    }

    // otherwise, wait for an item to hit the buffer
    next = [cb];
  };
});