/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.59%)
 * Likes:    2438
 * Dislikes: 256
 * Total Accepted:    647.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let begin = 0,
    end = nums.length - 1,
    mid = 0
  while (begin <= end) {
    mid = Math.floor((begin + end) / 2)
    if (nums[mid] == target) {
      return mid
    } else if (target > nums[mid]) {
      begin = mid + 1
    } else if (target < nums[mid]) {
      end = mid - 1
    }
  }
  return begin 
};
// console.log(searchInsert([1], 0));
// console.log(searchInsert([1,3], 2));
// console.log(searchInsert([1,3,5], 4));
// console.log(searchInsert([1,3,5,6], 0));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 7));
// console.log('end');
// @lc code=end

