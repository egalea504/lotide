// importing countLetters function for testing
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  it("returns { h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 } for 'how are you'", () => {
    assert.deepEqual(countLetters("how are you"), { h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 });
  });

  it("returns { i: 3, s: 2, t: 1, h: 1, w: 1, o: 1, r: 1, k: 1, n: 1, g: 1 } for ['is this working']", () => {
    assert.deepEqual(countLetters("is this working"), { i: 3, s: 2, t: 1, h: 1, w: 1, o: 1, r: 1, k: 1, n: 1, g: 1 });
  });
})