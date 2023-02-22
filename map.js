// description: function takes in an array and outputs the results of each index passing through callback function


const map = function(array, callback) {
  // define empty array to which we can push final elements
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // this pushes the callback word (which is the first letter of the word) in the final results array
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
