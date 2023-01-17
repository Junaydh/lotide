const map = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
    console.log(i);
  }
  return results;
};

module.exports = map;