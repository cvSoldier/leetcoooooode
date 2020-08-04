/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (34.47%)
 * Likes:    5126
 * Dislikes: 462
 * Total Accepted:    742.3K
 * Total Submissions: 2.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let begin = 0
  let end = nums.length - 1
  let mid, bulin
  while(begin <= end) {
    mid = (begin + end) >> 1
    if(nums[mid] === target) {
      return mid
    }

    bulin = nums[begin] <= nums[mid]

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
  return -1
};
// console.log(search([3,1], 1))
// console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([3,3,3,3,4,5,6,7,0,1,2], 0))
// console.log(search([4,5,6,7,0,1,2,3,3,3,3], 7))
// console.log(search([4,5,6,7,0,1,2], 3))
// @lc code=end

