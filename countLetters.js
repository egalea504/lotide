// description: countLetters takes in function and outputs the number of occurences for each letter within it

// function takes in a sentence
const countLetters = function(sentence) {
  // defines an object to which we will push final results
  const results = {};

  // loop through each letter in the sentence
  for (const letter of sentence) {

    // if the letter isn't equal to a space
    if (letter !== " ") {
      // if the letter already exists in the results object - add 1 to letter count
      if (results[letter]) {
        results[letter] += 1;
        // add new letter to results object
      } else results[letter] = 1;
    }
  }

  // return the final results for each letter
  return results;
};

module.exports = countLetters;
