const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let finalArray = [];

  if (array.length % 2 === 0) {
    finalArray.push(array[Math.floor(array.length / 2 - 1)]);
    finalArray.push(array[Math.floor(array.length / 2)]);
    
  } else if (array.length % 2 !== 0) {
    finalArray.push(array[Math.floor(array.length / 2)]);
  }

  if (array.length <= 2) finalArray = [];

  return finalArray;
}

module.exports = middle;