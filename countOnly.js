// description: function takes in an array of items and returns a count of occurences for all the items that were called in the object

// function takes in two parameters
const countOnly = function(allItems, itemsToCount) {
  // defining object variable to which we will push final results
  const results = {};

  // loop through all items
  for (const item of allItems) {
    console.log(item);

    // if items to count matches the item - add the item to results or add 1 count to already existing item in final results
    if (itemsToCount[item] === true) {
      
      if (results[item]) {
        results[item] += 1;
      } else results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;