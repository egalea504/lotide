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
  
// const assertArraysEqual = function(actual, expected) {

//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
// };

// /* This function should take in a source array and a itemsToRemove array.
// * It should return a new array with only those elements from source that are not present in the itemsToRemove array.
// */

// //Steps
// //evaluate current array and remove all items that are not wanted - create a new array and push only wanted objects

const without = function(itemsArray, itemsToRemove) {
  let finalItemsArray = []; // --> new array in which we will push final items
  
  for (let i = 0; i < itemsArray.length; i++) {
    
    let foundInItemsToRemove = false;
    
    for (let j = 0; j < itemsToRemove.length; j++) {
      
      if (itemsArray[i] === itemsToRemove[j]) foundInItemsToRemove = true;
    } if (!foundInItemsToRemove) {
      finalItemsArray.push(itemsArray[i]);
    }
  } return finalItemsArray; 
};

module.exports = without;

