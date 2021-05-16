/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  debugger
  let cur = '0'
  const changeNums = [0, 0]
  for(let i = 0; i < s.length; ++i) {
    if(s[i] !== cur) {
      changeNums[cur]++
    }
    cur === '0' ? cur = '1' : cur = '0'
  }
  let min
  if (changeNums[0] != changeNums[1]) {
    min = -1
  } else {
    min = changeNums[0] + changeNums[1]
  }

  cur = '1'
  const _changeNums = [0, 0]
  for(let i = 0; i < s.length; ++i) {
    if(s[i] !== cur) {
      _changeNums[cur]++
    }
    cur === '0' ? cur = '1' : cur = '0'
  }
  if (_changeNums[0] === _changeNums[1]) {
    if(min === -1) {
      min = _changeNums[0] + _changeNums[1]
    } else {
      min = Math.min(min, _changeNums[0] + _changeNums[1])
    }
  }
  return min === -1 ? min : min/ 2
};
console.log(minSwaps('111000'))
console.log(minSwaps('010'))
console.log(minSwaps('1110'))
console.log(minSwaps('1'))