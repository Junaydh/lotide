const countOnly = function(allItems, itemsToCount) {
  let counted = {};
  for (const property in itemsToCount) {
    if (itemsToCount[property] === true) {
      counted[property] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === property) {
          counted[property] += 1;
        }
      }
    }
    for (const property in counted) {
      if (counted[property] === 0) {
        delete counted[property];
      }
    }
  }
  return counted;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

module.exports = countOnly;