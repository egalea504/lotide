const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

  it("returns [ 1, 2, 5, 7, 2 ] for data1", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
  });

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for data2", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  const data3 = ["hello", "IS", "this", "WORKING"]; 

  it("returns hello for data3", () => {
    assert.deepEqual(takeUntil(data3, x => x === x.toUpperCase()), ['hello']);
  });

  const data4 = [6, 12, 4, 20, 31, 24];

  it("returns [6, 12, 4, 20] for data4", () => {
    assert.deepEqual(takeUntil(data4, x => x % 2), [6, 12, 4, 20]);
  });

});


