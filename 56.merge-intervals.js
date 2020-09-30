/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (39.52%)
 * Likes:    4953
 * Dislikes: 316
 * Total Accepted:    662.8K
 * Total Submissions: 1.7M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 * 
 * Constraints:
 * 
 * 
 * intervals[i][0] <= intervals[i][1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  if(intervals.length === 0) return []
  for(let begin = 0, end = 1; begin < intervals.length; ++end) {
    if(intervals[end] && (intervals[begin][1] >= intervals[end][0])) {
      intervals[begin][1] = Math.max(intervals[end][1], intervals[begin][1])
    } else {
      result.push([intervals[begin][0], intervals[begin][1]])
      begin = end
    }
  }
  return result
};
// console.log(merge([[2,6],[1,3],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,6]]))
// console.log(merge([[1,4], [2,3]]))
// @lc code=end

