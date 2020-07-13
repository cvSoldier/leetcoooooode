/**
 * @param {string} s
 * @return {string}
 */
module.exports = function (s) {
  function expendString(index1, index2) {
    if (index1 > 0 && index2 < s.length && s[index1] === s[index2]) {
      expendString(index1 - 1, index2 + 1)
    } else {
      index2 - index1 > longestString.length ?
        longestString = s.slice(index1, index2 + 1) :
        null
    }
  }
  let longestString = ''
  for (let i = 1; i < s.length; i++) {
    if (i + 1 < s.length) {
      expendString(i - 1, i + 1)
    }
    if (s[i - 1] === s[i]) {
      expendString(i - 1, i)
    }
  }
  return longestString
};