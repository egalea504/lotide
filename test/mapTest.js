// mocha testing for map

const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("returns ['h', 'h', 'a', 'y', 'd', 'g'] for ['hello', 'how', 'are', 'you', 'doing', 'great']", () =>
  assert.deepEqual(map(['hello', 'how', 'are', 'you', 'doing', 'great'], word => word[0]), ['h', 'h', 'a', 'y', 'd', 'g']));

  // array created for testing purpose
  const numbers = [2, 3, 4, 5, 6];

  it("returns [4, 6, 8, 10, 12] for number => number * 2 map", () =>
  assert.deepEqual(map(numbers, number => number * 2), [4, 6, 8, 10, 12]));

  // // new words array
  const words2 = ["this", "will", "be", "easy"];

  it("returns [true, true, false, true] for map(words2, words2 => words2.length >= 4)", () =>
  assert.deepEqual(map(words2, words2 => words2.length >= 4), [true, true, false, true]));


});

// // Test Case 4
// // new words array
// const words3 = ["here", "we", "go", "again"];
// // create a callback function that will take away the last index of each word
// // we can use slice
// const results4 = map(words3, words3 => words3.slice(1));
// console.log(results4);

// assertArraysEqual(results4, ["ere", "e", "o", "gain"]);

