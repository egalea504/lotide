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

const flatten = function(fullArray) {
  let finalArray = [];
  
  for (i = 0; i < fullArray.length; i++) {
    if (Array.isArray(fullArray[i])) {
      for (j = 0; j < fullArray[i].length; j++) {
        finalArray.push(fullArray[i][j]);
      }   
    } else finalArray.push(fullArray[i]);
  }
  console.log(finalArray);
}

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([[1, 4, 5], 6, [7, 8, 9], 10]);
