// testing assertObjectsEqual

const assertObjectsEqual = require('../assertObjectsEqual');

// TEST 1
// gives successful assertion as the two objects contain the same keys
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" });

// TEST 2
//gives successful assertion as the two objects contain the same keys
assertObjectsEqual({size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}}, {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"});

// TEST 3
// gives assertion failed as the object1 has a key that the other object doesn't have . fit key
assertObjectsEqual({fit: "slim", size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}}, {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"});