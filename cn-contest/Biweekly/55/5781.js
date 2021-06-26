/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
  let index = s.indexOf(part)
  while(index !== -1) {
    s = s.slice(0, index) + s.slice(part.length + index)
    index = s.indexOf(part)
  }
  return s
};