const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

const findKey = function(object, callback) {
  
  // looping through each object key
  for (let key in object) {
    // if callback of the key is true then return the key and stop loop
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
} , x => x.stars === 2), "noma");

assertEqual(findKey({
  "Vacation Jerry":   { days: 7 },
  "Vacation Elaine":      { days: 6 },
  "Vacation George":   { days: 9 },
  "Vacation Kramer":       { days: 12 },
  "Vacation Newman":  { days: 20 }
} , x => x.days > 10), "Vacation Kramer");

