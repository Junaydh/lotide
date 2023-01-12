const findKeyByValue = function(obj, key) {
  for (const property in obj) {
    if (obj[property] === key) {
      return property;
    }
  }
  return undefined;
};