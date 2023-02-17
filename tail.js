// function exported - it will be imported in tailTest to proceed with the validation tests

const tail = function(array) {
  //define variable with new array
  let result = [];
  //take away first item in the initial array and push the rest to the new array
  result = array.slice(1);
  
  return result;
};

module.exports = tail;