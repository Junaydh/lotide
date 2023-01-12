const letterPositions = function(string) {
  let positions = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (positions[string[i]]) {
        positions[string[i]].push(i);
      } else {
        positions[string[i]] = [i];
      }
    }
  }
  return positions;
};