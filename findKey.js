// description: function takes in an object and outputs the first key that meets the criteria of the callback function

const findKey = function(object, callback) {
  
  // looping through each object key
  for (let key in object) {
    // if callback of the key is true then return the key and stop loop
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
