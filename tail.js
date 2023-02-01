const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

const tail = function(array) {
  //define variable with new array
  let result = [];
  //take away first item in the initial array and push the rest to the new array
  result = array.slice(1);
  
  return result;
};

//Tests code below

//Test 1
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));

assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

//Test 2
const trial1 = ["justAString"];
console.log(tail(trial1));

assertEqual(tail(trial1).length, 0);
assertEqual(tail(trial1)[0], undefined);
assertEqual(tail(trial1)[1], undefined);

//Test 3
const trial2 = [];
console.log(tail(trial1));

assertEqual(tail(trial2).length, 0);
assertEqual(tail(trial2)[0], undefined);
assertEqual(tail(trial2)[1], undefined);