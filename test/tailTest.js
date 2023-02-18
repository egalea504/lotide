// tests updated to mocha testing

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['justAString']", () => {
    assert.deepEqual(tail(["justAString"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns ['how', 'are', 'you'] for ['Hello', 'how', 'are', 'you']", () => {
    assert.deepEqual(tail(["Hello", "how", "are", "you"]), ["how", "are", "you"]);
  });

});