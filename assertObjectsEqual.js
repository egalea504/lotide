//eqObjects copy/pasted from eqObjects.js

const eqObjects = function(object1, object2) {
  let result = false; // => let initial result be false

  // => if the number of keys isn't equal for both objects. then automatically output result as false because objects can't be equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;

  } else {
    // => if length is the same, then check whether the keys in object 1 = to object2
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1.key === object2.key) {
        return true;
      } else result = false;
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // line added to inspect the objects and see if the code is actually successful
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
};

// TEST 1
// gives successful assertion as the two objects contain the same keys
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" });

// TEST 2
//gives successful assertion as the two objects contain the same keys
assertObjectsEqual({size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}}, {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"});

// TEST 3
// gives assertion failed as the object1 has a key that the other object doesn't have . fit key
assertObjectsEqual({fit: "slim", size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}}, {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"});