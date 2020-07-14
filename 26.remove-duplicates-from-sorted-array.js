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
      delLen++
      begin = iter
    }
  }
  return delLen
};
// var arr = [0,0,1,1,1,2,2,3,3,4,4,4]
var arr = [1,1,3]
// removeDuplicates(arr)
console.log(arr, removeDuplicates(arr));
// @lc code=end

