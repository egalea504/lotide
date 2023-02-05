const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {

    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else results[letter] = 1;
    }
  }
  
  return results;
};


const test1 = 'how are you';

const result1 = countLetters(test1);
console.log(result1);

assertEqual(result1["h"], 1);
assertEqual(result1["w"], 1);
assertEqual(result1["z", undefined]);

const test2 = "is this working";

const result2 = countLetters(test2);
console.log(result2);

assertEqual(result2["i"], 3);
assertEqual(result2["j"], undefined);

