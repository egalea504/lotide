// mocha testing for findKey

const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it("returns noma for findKey1", () =>
  assert.deepEqual(findKey({"Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
} , x => x.stars === 2), "noma"
));

it("returns Vacation Kramer for findKey2", () =>
  assert.deepEqual(findKey({
  "Vacation Jerry":   { days: 7 },
  "Vacation Elaine":      { days: 6 },
  "Vacation George":   { days: 9 },
  "Vacation Kramer":       { days: 12 },
  "Vacation Newman":  { days: 20 }
  } , x => x.days > 10), "Vacation Kramer"
  ));
});