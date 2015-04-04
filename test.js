/* global it */

'use strict';

var assert = require('assert');
var arrayIncludes = require('./');

it('should includes', function() {
  assert.equal(arrayIncludes([[1, 2]], [1, 2]), true);
});

it('should not includes', function() {
  assert.equal(arrayIncludes([[5, 2]], [1, 2]), false);
});
