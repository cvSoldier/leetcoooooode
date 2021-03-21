/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let max = nums[0], temp = nums[0]
  for(let end = 1; end < nums.length; ++end) {
    // debugger
    if(nums[end - 1] < nums[end]) {
      temp += nums[end]
      if(temp > max) max = temp
    } else {
      temp = nums[end]
    }
  }
  return max
};
console.log(maxAscendingSum([12,17,15,13,10,11,12]));
console.log(maxAscendingSum([10,20,30,40,50]));
console.log(maxAscendingSum([100, 10, 1]));
