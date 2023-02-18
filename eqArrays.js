const eqArrays = function(a, b) {
  let result = false;

  if (a.length !== b.length) {
    return false;
  } else { 

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
}
return true;
// corrected my eqArrays function in order to return true if the arrays pass all the if functions instead of returning result
  // return result which I inputed before caused an error when comparing empty arrays. since the array is empty, no indexes can be compared so it caused the function to always test false - failing the test even if both arrays are []
}

module.exports = eqArrays;
