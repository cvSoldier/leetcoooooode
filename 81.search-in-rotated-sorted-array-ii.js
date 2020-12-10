/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (33.01%)
 * Likes:    1611
 * Dislikes: 497
 * Total Accepted:    261.4K
 * Total Submissions: 791.8K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 * 
 * Follow up:
 * 
 * 
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let begin = 0;
  let end = nums.length - 1;
  while(begin <= end) {
    let mid = (begin + end) >> 1
    if(nums[mid] === target) return true
    if(nums[begin] === nums[mid]) {
      // 局。。。局部二分?
      begin++
      continue
    }
    const bulin = nums[begin] < nums[mid]
    if(bulin) {
      if(target >= nums[begin] && target < nums[mid]) {
        end = mid - 1
      } else {
        begin = mid + 1
      }
    } else {
      if(target > nums[mid] && target <= nums[end]) {
        begin = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  if(nums[begin] === target) return true
  return false
};
// console.log(search([4,5,6,7,1,2,3], 3));
// console.log(search([5,6,7,1,2,3,4], 3));
// console.log(search([1,1,3,1], 3));
// console.log(search([1,3,1,1,1], 3));
// console.log(search([1,1,1,3,1], 3));
// console.log(search([1,2,3,0], 3));
// @lc code=end