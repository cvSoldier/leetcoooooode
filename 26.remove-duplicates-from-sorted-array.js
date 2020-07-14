/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let begin = iter = delLen = 0
  for(let len = nums.length; iter < len + 1; iter++) {
    if(nums[iter] !== nums[begin]) {
      delLen = iter - begin - 1
      delLen && nums.splice(begin, delLen)
      begin++
      iter = begin
      len -= delLen
    }
  }
};
var arr = [0,0,1,1,1,2,2,3,3,4,4,4]
// var arr = [1,2,3]
removeDuplicates(arr)
console.log(arr);
// @lc code=end

