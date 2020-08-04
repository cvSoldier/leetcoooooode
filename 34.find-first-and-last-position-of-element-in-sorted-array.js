/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (36.02%)
 * Likes:    3530
 * Dislikes: 151
 * Total Accepted:    511.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non decreasing array.
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function searchBinary(nums, target) {
    let begin = 0,
      end = nums.length - 1,
      mid = 0
    while (begin <= end) {
      mid = ((end - begin) >> 1) + begin;
      if (nums[mid] == target) {
        return mid
      } else if (target > nums[mid]) {
        begin = mid + 1
      } else if (target < nums[mid]) {
        end = mid - 1
      }
    }
    return -1 
  };
  let mid = searchBinary(nums, target)
  if(mid === -1) return [-1, -1]
  let begin = 0, end = mid, temp
  while (begin <= end) {
    temp = (end + begin) >> 1
    if (nums[temp] == target) {
      end = temp - 1
    } else if (target > nums[temp]) {
      begin = temp + 1
    }
  }
  const result = [begin]

  begin = mid, end= nums.length - 1
  while (begin <= end) {
    temp = (end + begin) >> 1
    if (nums[temp] == target) {
      begin = temp + 1
    } else if (target < nums[temp]) {
      end = temp - 1
    }
  }
  result.push(end)
  return result
};
// @lc code=end
// console.log(searchRange([5,7,7,7,8,8,10], 8));
// console.log(searchRange([5,7,7,7,8,8,8,10], 8));
// console.log(searchRange([5,7,7,7,8,8,8,8,10], 8));
// console.log(searchRange([5,7,7,7,8,8,8,8,8,10], 8));
// console.log(searchRange([5,7,7,7,8,8,8,8,8,8,10], 8));
// console.log(searchRange([5,7,7,7,8,8,8,8,8,8,8,10], 8));
