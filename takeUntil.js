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

const takeUntil = function(array, callback) {
  let results = [];

  // go through each item in the array
  for (let item of array) {
    // if callback function doesn't apply, then push the item and else , stop the loop
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

//Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

// Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

//Test Case 3
const data3 = ["hello", "IS", "this", "WORKING"];
// callback function will push to the new array as long as the element doesn't have an upper case
const results3 = takeUntil(data3, x => x === x.toUpperCase());
console.log(results3);

assertArraysEqual(results3, ['hello']);

//Test Case 4
const data4 = [6, 12, 4, 20, 31, 24];
// create callback that will push numbers as long as they are even , stop once you stumble apon uneven element
const results4 = takeUntil(data4, x => x % 2);
console.log(results4);

assertArraysEqual(results4, [6, 12, 4, 20]);