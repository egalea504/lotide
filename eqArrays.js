const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

const eqArrays = function(a, b) {
  let result = false;

  if (a.length !== b.length) {
    return false;
  } else { 

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    } else result = true;
  }
}
return result;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);