const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 3, 2]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true

