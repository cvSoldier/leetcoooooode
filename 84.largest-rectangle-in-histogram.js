/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (35.48%)
 * Likes:    4665
 * Dislikes: 96
 * Total Accepted:    305K
 * Total Submissions: 845.2K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given n non-negative integers representing the histogram's bar height where
 * the width of each bar is 1, find the area of largest rectangle in the
 * histogram.
 * 
 * 
 * 
 * 
 * Above is a histogram where width of each bar is 1, given height =
 * [2,1,5,6,2,3].
 * 
 * 
 * 
 * 
 * The largest rectangle is shown in the shaded area, which has area = 10
 * unit.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [2,1,5,6,2,3]
 * Output: 10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []
  let max = 0
  heights = [0, ...heights, 0]
  for(let i = 0; i < heights.length; ++i) {
    let tail = stack[stack.length - 1]
    while(tail!== undefined && heights[i] < heights[tail]) {
      let index = stack.pop()
      tail = stack[stack.length - 1]
      max = Math.max(max, (i - tail - 1) * heights[index])
    }
    stack.push(i)
  }
  return max
};

// console.log(largestRectangleArea([2,1,5,6,2,3]));
// console.log(largestRectangleArea([2,1,5,4,2,3]));
// console.log(largestRectangleArea([2,1,2]));
// console.log(largestRectangleArea([5,4,1,2]));

// @lc code=end

