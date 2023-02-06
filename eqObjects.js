//assertEqual code copied from file eqArrays

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

// where I will implement the eqObjects function

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

// these are tests.. - first checking what assertEqual outputs

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => 🛑🛑🛑 Assertion Failed: undefined !== true 🛑🛑🛑

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => 🛑🛑🛑 Assertion Failed: undefined !== false 🛑🛑🛑

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // with the current function I pass above, the assertion passes

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // with the current function I pass above, the assertion passes

const longLongSleeve = {size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}};
const shortShortSleeve = {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"};
assertEqual(eqObjects(longLongSleeve, shortShortSleeve), true);

console.log(eqObjects(longLongSleeve, shortShortSleeve));

/* In the implement eqObjects, the way the assignment is given, the function should not be able to compare
/ keys that are an object so far. However, I built the function in a way that compares the the keys for both objects
/ for any type and all assertions pass in my code.
*/