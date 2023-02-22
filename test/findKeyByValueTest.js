// mocha testing for findKeyByValue

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    dramaComedy: "Brooklyn Nine-Nine"
  };

  it("returns drama for The Wire", () =>
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));

it("returns undefined for That 70's Show", () =>
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

  it("returns sciFi for The Expanse", () =>
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"));

  it("returns comedy for Brooklyn Nine-Nine", () =>
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"));
});