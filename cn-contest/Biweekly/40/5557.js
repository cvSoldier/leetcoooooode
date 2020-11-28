/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let max = 0
  let temp = 0
  let len = word.length
  debugger
  for(let i = 0; i <= sequence.length;) {
    if(sequence[i] === word[temp % len]) {
      temp++
      i++
    } else {
      max = Math.max(max, temp)
      i -= (temp - 1) // 可以改成用sunday
      temp = 0
    }
  }
  return Math.floor(max / len)
};

console.log(maxRepeating('ababc', 'ab'));
console.log(maxRepeating('ababc', 'ba'));
console.log(maxRepeating('ababc', 'ac'));
console.log(maxRepeating('aaa', 'a'));
console.log(maxRepeating('bbaa', 'ba'));
