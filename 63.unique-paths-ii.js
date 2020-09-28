/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.89%)
 * Likes:    2049
 * Dislikes: 254
 * Total Accepted:    318.6K
 * Total Submissions: 915.9K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] === 1) return 0
  const m = obstacleGrid[0].length, n = obstacleGrid.length
  const T = new Array(m)
  T[0] = 1
  for(let i = 1; i < m; ++i) {
    if(obstacleGrid[0][i] === 0) T[i] = T[i - 1]
    else T[i] = 0
  }
  for(let j = 1; j < n; ++j) {
    for(let i = 0; i < m; ++i) {
      if(obstacleGrid[j][i] === 0) T[i] += (T[i - 1] || 0)
      else T[i] = 0
    }
  }
  return T[m - 1]
};
// console.log(uniquePathsWithObstacles([
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]))
// console.log(uniquePathsWithObstacles([
//   [0],
//   [1]
// ]))
// @lc code=end
