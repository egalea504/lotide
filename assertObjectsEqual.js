//description: function takes in two objects and outputs whether they are equal or not

// import eqObjects to pass it within assert Objects Equal
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // line added to inspect the objects and see if the code is actually successful
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
};

module.exports = assertObjectsEqual;