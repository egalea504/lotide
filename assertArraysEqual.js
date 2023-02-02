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

assertArraysEqual([1, 2, 3], [1, 3, 2]);