// description: function takes in an array that contains nested arrays and returns a flattened versions

const flatten = function(fullArray) {
  let finalArray = [];
  
  // loop through array
  for (i = 0; i < fullArray.length; i++) {
    // if the index is an array
    if (Array.isArray(fullArray[i])) {

      // loop through nested array
      for (j = 0; j < fullArray[i].length; j++) {
        // push the index of index
        finalArray.push(fullArray[i][j]);
      }   
      // else push index
    } else finalArray.push(fullArray[i]);
  }
  return finalArray;
}

module.exports = flatten;

