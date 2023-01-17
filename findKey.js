const findKey = function(obj, callback) {
  for (const property in obj) {
    if (callback(obj[property])) {
      return property;
    }
  }
  return undefined;
};

module.export = findKey;