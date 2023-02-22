// countLetters.js test 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

const test1 = 'how are you';

console.log(countLetters(test1));
// console.log(result1);

// assertEqual(result1["h"], 1);
// assertEqual(result1["w"], 1);
// assertEqual(result1["z", undefined]);

const test2 = "is this working";

console.log(countLetters(test2));
// console.log(result2);

// assertEqual(result2["i"], 3);
// assertEqual(result2["j"], undefined);

// countOnly.js test

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// testing for findKey


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
} , x => x.stars === 2), "noma");

assertEqual(findKey({
  "Vacation Jerry":   { days: 7 },
  "Vacation Elaine":      { days: 6 },
  "Vacation George":   { days: 9 },
  "Vacation Kramer":       { days: 12 },
  "Vacation Newman":  { days: 20 }
} , x => x.days > 10), "Vacation Kramer");

// test eqObjects

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

// test takeUntil.js

// //Test Case 1
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// // Test Case 2
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// //Test Case 3
// const data3 = ["hello", "IS", "this", "WORKING"];
// // callback function will push to the new array as long as the element doesn't have an upper case
// const results3 = takeUntil(data3, x => x === x.toUpperCase());
// console.log(results3);

// assertArraysEqual(results3, ['hello']);

// //Test Case 4
// const data4 = [6, 12, 4, 20, 31, 24];
// // create callback that will push numbers as long as they are even , stop once you stumble apon uneven element
// const results4 = takeUntil(data4, x => x % 2);
// console.log(results4);

// assertArraysEqual(results4, [6, 12, 4, 20]);