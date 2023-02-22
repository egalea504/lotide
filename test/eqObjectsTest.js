const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

  it("returns true when comparing shirtObject and anotherShirtObject", () =>
  assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true
  ));

  it("returns false when comparing shirtObject with longSleeveShirtObject", () =>
  assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false
  ));

  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it("returns true when comparing multiColorShirtObject and anotherMultiColorShirtObject", () =>
  assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true
  ));

  it("returns false when comparing multiColorShirtObject with longSleeveMultiColorShirtObject", () =>
  assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false
  ));

  const longLongSleeve = {size: "medium", colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}};
  const shortShortSleeve = {colors: {red: ["red-stripe", "red-red"], blue: ["blue-stripe", "blue-blue"]}, size: "medium"};

  it("returns true when comparing longLongSleeve with shortShortSleeve", () =>
  assert.deepEqual(eqObjects(longLongSleeve, shortShortSleeve), true
  ));

});

// console.log(eqObjects(longLongSleeve, shortShortSleeve));

/* In the implement eqObjects, the way the assignment is given, the function should not be able to compare
/ keys that are an object so far. However, I built the function in a way that compares the the keys for both objects
/ for any type and all assertions pass in my code.
*/