const countLetters = function(string) {
  let letterCount = {};
  for (const char of string) {
    if (char !== ' ') {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};