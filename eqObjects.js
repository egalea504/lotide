// description: function takes in two objects and outputs whether they are equal or not

// where I will implement the eqObjects function

const eqObjects = function(object1, object2) {
  let result = false; // => let initial result be false

  // => if the number of keys isn't equal for both objects. then automatically output result as false because objects can't be equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;

  } else {
    // => if length is the same, then check whether the keys in object 1 = to object2
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object1.key === object2.key) {
        return true;
      } else result = false;
    }
  }
  return result;
};

module.exports = eqObjects;