/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (43.33%)
 * Likes:    2556
 * Dislikes: 335
 * Total Accepted:    350K
 * Total Submissions: 805K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given an m x n matrix. If an element is 0, set its entire row and column to
 * 0. Do it in-place.
 * 
 * Follow up:
 * 
 * 
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let height = matrix.length
    width = matrix[0].length
    map = {}
    temp = []
    bool = false
  for(let i = 0; i < height; ++i) {
    temp = matrix[i]
    for(let j = 0; j < width; ++j) {
      if(temp[j] === 0) {
        map[j] = 1
        bool = true
      }
    }
    if(bool) {
      temp.fill(0)
      bool = false
    }
  }
  for(let i = 0; i < height; ++i) {
    temp = matrix[i]
    for(let j = 0; j < width; ++j) {
      if(map[j]) {
        temp[j] = 0
      }
    }
  }
};
// const arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// setZeroes(arr)
// console.log(...arr)
// @lc code=end

