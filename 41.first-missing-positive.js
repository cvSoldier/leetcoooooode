/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (32.23%)
 * Likes:    4630
 * Dislikes: 893
 * Total Accepted:    406.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array nums, find the smallest missing positive
 * integer.
 * 
 * Follow up: Could you implement an algorithm that runs in O(n) time and uses
 * constant extra space.?
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= nums.length <= 300
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // debugger
  let len = nums.length
  for(let i = 0; i < len; ++i) {
    while(nums[i] !== i + 1 && nums[i] > 0) {
      if(nums[nums[i] - 1] === nums[i] || nums[i] > nums.length) {
        nums[i] = 0
      } else {
        let mid = nums[nums[i] - 1]
        nums[nums[i] - 1] = nums[i]
        nums[i] = mid
      }
    }
  }
  for(let i = 0; i < nums.length; ++i) {
    if(!(nums[i] > 0)) {
      return i + 1
    }
  }
  return (nums[nums.length - 1] || 0) + 1
};
// console.log(firstMissingPositive([2,1]));
// console.log(firstMissingPositive([1,1]));
// console.log(firstMissingPositive([2,2]));
// console.log(firstMissingPositive([]));
// console.log(firstMissingPositive([1]));
// console.log(firstMissingPositive([1,2,0]));
// console.log(firstMissingPositive([3,4,-1,1]));
// console.log(firstMissingPositive([7,8,9,11,12]));
// @lc code=end
