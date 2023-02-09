const eqArrays = function(a, b) {
  let result = false;

  if (a.length !== b.length) {
    return false;
  } else for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    } else result = true;
  }
  return result;
};
  
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

// creating variable words with an array of words
const words = ["hello", "how", "are", "you", "doing", "great"];

const map = function(array, callback) {
  // define empty array to which we can push final elements
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // this pushes the callback word (which is the first letter of the word) in the final results array
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["h", "h", "a", "y", "d", "g"]);

// Test Case 2
// array created for testing purpose
const numbers = [2, 3, 4, 5, 6];
// create a callback function that will double each number in the array
const results2 = map(numbers, number => number * 2);
console.log(results2);

assertArraysEqual(results2, [4, 6, 8, 10, 12]);

//Test Case 3
// new words array
const words2 = ["this", "will", "be", "easy"];
// create a callback function that will output whether a word has 4 characters or more
const results3 = map(words2, words2 => words2.length >= 4);
console.log(results3);

assertArraysEqual(results3, [true, true, false, true]);

// Test Case 4
// new words array
const words3 = ["here", "we", "go", "again"];
// create a callback function that will take away the last index of each word
// we can use slice
const results4 = map(words3, words3 => words3.slice(1));
console.log(results4);

assertArraysEqual(results4, ["ere", "e", "o", "gain"]);