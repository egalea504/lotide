// test updated to mocha testing

const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("returns that [1, 2, 3] without 1 should equal to [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [ 2, 3 ]);
  });

  it("returns that ['1', '2', '3'] without 1, 2, '3'] should equal to ['1', '2']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns that [3, 4, 'ten', 'something'] without 'ten' and 3 should equal [4,'something']", () => {
    assert.deepEqual(without([3, 4, "ten", "something"], ["ten", 3]), [4, "something"]);
  });

});

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);