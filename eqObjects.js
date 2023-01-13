const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const property in obj1) {
    if (Array.isArray(obj1[property]) && Array.isArray(obj2[property])) {
      if (!(eqArrays(obj1[property], obj2[property]))) {
        return false;
      }
    } else if (!(obj1[property] === obj2[property])) {
      return false;
    }
  }
  return true;
};
