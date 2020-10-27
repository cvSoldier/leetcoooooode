/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (36.60%)
 * Likes:    2166
 * Dislikes: 165
 * Total Accepted:    352.2K
 * Total Submissions: 961.3K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false
  function binarySearch(arr, target) {
    let end = arr.length - 1
    let begin = 0
    while(begin <= end) {
      let mid = (begin + end) >> 1
      if(arr[mid] === target) return mid
      else if(arr[mid] > target) {
        end = mid - 1
      } else {
        begin = mid + 1
      }
    }
    return begin && (begin - 1)
  }
  const n = binarySearch(matrix.map(_ => _[0]), target)
  const m = binarySearch(matrix[n], target)
  if(matrix[n][m] === target) return true
  return false
};
// console.log(searchMatrix([  
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 11));
// console.log(searchMatrix([  
//   [1,   3]
// ], 3));

// @lc code=end

