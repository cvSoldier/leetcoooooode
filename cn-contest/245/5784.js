/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
  const map = {}
  for(let i = 0; i < words.length; ++i) {
    const word = words[i]
    for(let j = 0; j < word.length; ++j) {
      map[word[j]] ? map[word[j]]++ : map[word[j]] = 1 
    }
  }
  const values = Object.values(map)
  return words.length === 1 || values.every(el => el % words.length === 0 && el !== 1)
};

console.log(makeEqual(['b']));