/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (63.13%)
 * Likes:    4158
 * Dislikes: 108
 * Total Accepted:    634.7K
 * Total Submissions: 997K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 重点：怎么前进（进入下一个状态）； 怎么回退（回到上一个状态）；什么时候停止
var permute = function(nums) {
  var result = []
  backtrack(nums, 0, [], result)
  return result
};
var backtrack = function(nums, n, cur, result) {
  // debugger
  if(n === nums.length) {
    result.push([...cur])
    return
  }

  var len = nums.length
  while(--len >= 0) {
    if(!cur.includes(nums[len])) {
      cur.push(nums[len])
      backtrack(nums, n + 1, cur, result)
      cur.pop()
    }
  }
}
// console.log(...permute([1,2,3]));
// @lc code=end

