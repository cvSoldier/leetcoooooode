/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (62.50%)
 * Likes:    4276
 * Dislikes: 90
 * Total Accepted:    626.6K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  backtrack(nums, result, [], 0)
  return result
};
function backtrack(nums, result, curr, n) {
  result.push([...curr])

  for(let i = n; i < nums.length; ++i) {
    curr.push(nums[i])
    backtrack(nums, result, curr, i + 1)
    curr.pop()
  }
}
// console.log(...subsets([1,2,3]));

// @lc code=end
