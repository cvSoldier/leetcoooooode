/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  let bool = false
  for(let i = 0; i < nums.length; ++i) {
    // debugger
    bool = bool || helper(nums.slice(), i)
  }
  return bool

  function helper(nums, index) {
    // debugger
    nums.splice(index, 1)
    for(let i = 1; i < nums.length; ++i) {
      if(nums[i] <= nums[i - 1]) return false
    }
    return true
  }
};
console.log(canBeIncreasing([1,2,10,5,7]));
console.log(canBeIncreasing([2,3,1,2]));
console.log(canBeIncreasing([105,924,32,968]));