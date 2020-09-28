/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (54.41%)
 * Likes:    3806
 * Dislikes: 223
 * Total Accepted:    528.8K
 * Total Submissions: 968.4K
 * Testcase Example:  '3\n7'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: m = 3, n = 3
 * Output: 6
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= m, n <= 100
 * It's guaranteed that the answer will be less than or equal to 2 * 10^9.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 
 * @思路
 * if(m === 1 || n === 1) return 1  
 * f(m, n) === f(m - 1, n) + f(m, n - 1)
 * @注意栈溢出
 */
var uniquePaths = function(m, n) {
  const T = new Array(m).fill(1)
  for(let j = 1; j < n; ++j) {
    for(let i = 1; i < m; ++i) {
      T[i] += T[i - 1]
    }
  }
  return T[m - 1]
};

// console.log(uniquePaths(3, 3));
// console.log(uniquePaths(51, 9));
// @lc code=end

