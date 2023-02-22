// description: function that will take an array and loop through it until output matches callback function

const takeUntil = function(array, callback) {
  let results = [];

  // go through each item in the array
  for (let item of array) {
    // if callback function doesn't apply, then push the item and else , stop the loop
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

module.exports = takeUntil;