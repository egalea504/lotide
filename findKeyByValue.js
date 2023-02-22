// description: function takes an object and a value and outputs first key that matches the said value

const findKeyByValue = function(object, value) {

  for (let key in object) {
    
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  dramaComedy: "Brooklyn Nine-Nine"
};

module.exports = findKeyByValue;