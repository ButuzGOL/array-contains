/* global it */

'use strict';

var assert = require('assert');
var arrayContains = require('./');

it('should contains', function() {
  assert.equal(arrayContains([[1, 2]], [1, 2]), true);
});

it('should not contains', function() {
  assert.equal(arrayContains([[5, 2]], [1, 2]), false);
});
