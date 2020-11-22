// https://leetcode-cn.com/problems/ways-to-make-a-fair-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  let oddTotal = evenTotal = total = 0
  let even = true
  for(let i = 0; i < nums.length; ++i) {
    if(even) evenTotal += nums[i]
    else oddTotal += nums[i]
    even = !even
  }
  total = evenTotal + oddTotal
  
  even = true
  let result = 0
  let oddZeroToI = evenZeroToI = 0
  let oddIToN = oddTotal
  let evenIToN = evenTotal
  for(let i = 0; i < nums.length; ++i) {
    debugger
    if(even) {
      evenIToN -= nums[i]
      if(oddZeroToI + evenIToN === evenZeroToI + oddIToN) {
        result++
      }
      evenZeroToI += nums[i]
    } else {
      oddIToN -= nums[i]
      if(oddZeroToI + evenIToN === evenZeroToI + oddIToN) {
        result++
      }
      oddZeroToI += nums[i]
    }
    even = !even
  }
  return result
};
console.log(waysToMakeFair([2,1,6,4]));