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

const middle = function(array) {
  let finalArray = [];

  if (array.length % 2 === 0) {
    finalArray.push(array[Math.floor(array.length / 2 - 1)]);
    finalArray.push(array[Math.floor(array.length / 2)]);
    
  } else if (array.length % 2 !== 0) {
    finalArray.push(array[Math.floor(array.length / 2)]);
  }

  if (array.length <= 2) finalArray = [];

  console.log(finalArray);
}

// TEST CODE


middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([2, 3, 7, 5, 6]);
// assertArraysEqual(middle([2, 3, 7, 5, 6]), [7]);