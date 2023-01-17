const existsIn = function(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true;
    }
  }
  return false;
};

const without = function(array, without) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (existsIn(array[i], without) === false) {
      result.push(array[i])
    }
  }
  return result;
};

module.exports = without;