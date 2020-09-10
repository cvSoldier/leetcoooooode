/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (55.16%)
 * Likes:    1644
 * Dislikes: 68
 * Total Accepted:    306.1K
 * Total Submissions: 554.4K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * You may return the answer in any order.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 1, k = 1
 * Output: [[1]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 20
 * 1 <= k <= n
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  backtrack(n, 1, k, result, [])
  return result
};
function backtrack(n, begin, k, result, curr) {
  if(curr.length === k) {
    result.push([...curr])
    return
  }
  for(let i = begin; i <= n; ++i) {
    curr.push(i)
    backtrack(n, i + 1, k, result, curr)
    curr.pop()
  }
}

// console.log(...combine(4, 2));
// @lc code=end