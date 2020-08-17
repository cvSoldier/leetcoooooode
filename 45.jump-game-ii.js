/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (30.46%)
 * Likes:    2717
 * Dislikes: 140
 * Total Accepted:    267.7K
 * Total Submissions: 875.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  nums.unshift(1)
  var stepNum = 0, curr = 0
  while (true) {
    // debugger
    var temp = 0, tempIndex
    for(var i = 1; i <= nums[curr]; i++) {
      if(curr + i === nums.length - 1) {
        return stepNum
      } else if(temp <= nums[curr + i] + curr + i) {
        tempIndex = curr + i
        temp = nums[curr + i] + tempIndex
      }
    }
    curr = tempIndex
    stepNum++
  }
};
// console.log(jump([2,3,1,1,4]));
// console.log(jump([2,1]));
// console.log(jump([0]));
// console.log(jump([1]));
// console.log(jump([2,3,1]));
// @lc code=end

