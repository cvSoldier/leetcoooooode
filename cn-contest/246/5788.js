/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  debugger
  for(let len = num.length - 1; len >= 0; --len) {
    if(num[len] % 2 !== 0) {
      return num.slice(0, len + 1)
    }
  }
  return ''
}
console.log(largestOddNumber('52'));
console.log(largestOddNumber('4206'));
console.log(largestOddNumber('35427'));