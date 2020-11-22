/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (55.88%)
 * Likes:    6039
 * Dislikes: 662
 * Total Accepted:    415.1K
 * Total Submissions: 733.2K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array of integers nums containing n + 1 integers where each integer
 * is in the range [1, n] inclusive.
 * 
 * There is only one duplicate number in nums, return this duplicate number.
 * 
 * Follow-ups:
 * 
 * 
 * How can we prove that at least one duplicate number must exist in nums? 
 * Can you solve the problem without modifying the array nums?
 * Can you solve the problem using only constant, O(1) extra space?
 * Can you solve the problem with runtime complexity less than O(n^2)?
 * 
 * 
 * 
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * Example 3:
 * Input: nums = [1,1]
 * Output: 1
 * Example 4:
 * Input: nums = [1,1,2]
 * Output: 1
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= n <= 3 * 10^4
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer
 * which appears two or more times.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// v1 原地hash 修改了数组 不符合题目要求
var findDuplicate = function(nums) {
  for(let i = 0, len = nums.length; i < len; ++i) {
    while(nums[i] !== i + 1) {
      if(nums[nums[i] - 1] === nums[i]) {
        return nums[i]
      }
      let temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }
};
// console.log(findDuplicate([1,3,4,2,2]));
// @lc code=end
