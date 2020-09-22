/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (45.48%)
 * Likes:    8987
 * Dislikes: 423
 * Total Accepted:    1.1M
 * Total Submissions: 2.4M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution using the divide and conquer approach, which is more subtle.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1]
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [0]
 * Output: 0
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: nums = [-1]
 * Output: -1
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: nums = [-2147483647]
 * Output: -2147483647
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * 我悟了：dp === 高中数学の数学归纳法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let T1 = -Infinity
  let T2 = -Infinity
  let T3 = -Infinity
  let max = -Infinity
  for(var i = 0; i < nums.length; ++i) {
    T1 = max
    T2 = T2 + nums[i]
    T3 = nums[i]
    max = Math.max.call(null, T1, T2, T3)
    if(T3 > T2) {
      T2 = T3
    }
  }
  return max
};
//  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
//  console.log(maxSubArray([1]));
//  console.log(maxSubArray([0]));
//  console.log(maxSubArray([-2147483647]));
//  console.log(maxSubArray([-1]));
//  console.log(maxSubArray([8,-19,5,-4,20]));
