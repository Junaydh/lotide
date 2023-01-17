const flatten = function(arr) {
  let flat = [];
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      for (const subEle of ele) {
        flat.push(subEle);
      }
    } else {
      flat.push(ele);
    }
  }
  return flat;
};

module.exports = flatten;