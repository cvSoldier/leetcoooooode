/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (34.56%)
 * Likes:    4515
 * Dislikes: 340
 * Total Accepted:    496.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * 0 <= nums[i][j] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  debugger
  nums.unshift(1)
  var curr = 0
  var temp = 0, tempIndex = 0
  while(true) {
    for(var i = 1; i <= nums[tempIndex]; i++) {
      if(curr + i === nums.length - 1) {
        return true
      } else if(temp <= nums[curr + i] + curr + i) {
        tempIndex = curr + i
        temp = nums[curr + i] + tempIndex
      }
    }
    curr = tempIndex
    if(nums[curr] === 0) return false
  }
};
// console.log(canJump([3,2,1,0,4]));
// console.log(canJump([2,3,1,1,4]));
// @lc code=end

