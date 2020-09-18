/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (34.30%)
 * Likes:    2739
 * Dislikes: 594
 * Total Accepted:    399.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * Example 2:
 * 
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length < 2) return matrix[0] || []
  if(matrix[0].length < 2) return matrix.map(arr => arr[0])
  let direction = 'r'
  let L = 0, R = matrix[0].length - 1, U = 0, D = matrix.length - 1
  const result = [], curr = [0, 0], len = matrix[0].length * matrix.length
  for(let i = 0; i < len; i++) {
    result.push(matrix[curr[0]][curr[1]])
    if(direction === 'r') {
      curr[1] ++
      if(curr[1] >= R) {
        U++
        direction = 'd'
      } 
    } else if(direction === 'd') {
      curr[0] ++
      if(curr[0] >= D) {
        R--
        direction = 'l'
      } 
    } else if(direction === 'l') {
      curr[1] --
      if(curr[1] <= L) {
        D--
        direction = 'u'
      } 
    } else {
      curr[0] --
      if(curr[0] <= U) {
        L++
        direction = 'r'
      } 
    }
  }
  return result
};

// console.log(...spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(...spiralOrder([[3],[2]]))
// console.log(spiralOrder([]))
// console.log(...spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
// console.log(...spiralOrder([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]))
// @lc code=end
