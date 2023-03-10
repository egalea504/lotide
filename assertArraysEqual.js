// description: function takes in two arrays and outputs whether they are equal or not

// import eqArrays to pass it in the assert Arrays function
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

module.exports = assertArraysEqual;