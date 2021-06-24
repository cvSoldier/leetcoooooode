/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (47.27%)
 * Likes:    3279
 * Dislikes: 328
 * Total Accepted:    323.3K
 * Total Submissions: 682.4K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 * 
 * For each step, you may move to an adjacent number of the row below. More
 * formally, if you are on index i on the current row, you may move to either
 * index i or index i + 1 on the next row.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined
 * above).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: triangle = [[-10]]
 * Output: -10
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= triangle.length <= 200
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 <= triangle[i][j] <= 10^4
 * 
 * 
 * 
 * Follow up: Could you do this using only O(n) extra space, where n is the
 * total number of rows in the triangle?
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if(triangle.length === 1) return triangle[0][0]
  debugger
  for(let i = 1; i < triangle.length; ++i) {
    const T1 = triangle[i - 1]
    const T2 = triangle[i]
    for(let j = 0; j < T2.length; ++j) {
      if(j === 0) T2[j] += T1[j]
      else if(j === T2.length - 1) T2[j] += T1[j - 1]
      else T2[j] += Math.min(T1[j], T1[j - 1])
    }
  }
  return Math.min.apply(null, triangle[triangle.length - 1])
};

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
// @lc code=end

