const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};