// mocha testing for flatten

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6]", () =>
  assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));

  it("returns [1, 4, 5, 6, 7, 8, 9, 10]", () =>
  assert.deepEqual(flatten([[1, 4, 5], 6, [7, 8, 9], 10]), [1, 4, 5, 6, 7, 8, 9, 10]));
});