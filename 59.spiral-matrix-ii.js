/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (54.36%)
 * Likes:    1124
 * Dislikes: 119
 * Total Accepted:    203K
 * Total Submissions: 373.3K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n^2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // const result = new Array(n).fill(new Array(n)) // 这样 new 出的每个一维数组都是相同的引用
  const result = new Array(n)
  for(let i = 0; i < n; ++i) result[i] = new Array(n)
  const cur = [0, 0]
  let direct = 'r', len = n * n, i = 0
  let r = d = n - 1, l = u = 0
  while(i++ < len) {
    result[cur[0]][cur[1]] = i
    if(direct === 'r') {
      if(cur[1] < r) {
        cur[1]++
      } else {
        direct = 'd'
        cur[0]++
        u++
      }
    } else if(direct === 'd') {
      if(cur[0] < d) {
        cur[0]++
      } else {
        cur[1]--
        direct = 'l'
        r--
      }
    } else if(direct === 'l') {
      if(cur[1] > l) {
        cur[1]--
      } else {
        direct = 'u'
        cur[0]--
        d--
      }
    } else if(direct === 'u'){
      if(cur[0] > u) {
        cur[0]--
      } else {
        direct = 'r'
        cur[1]++
        l++
      }
    }
  }
  return result
};
// console.log(generateMatrix(4));
// @lc code=end
