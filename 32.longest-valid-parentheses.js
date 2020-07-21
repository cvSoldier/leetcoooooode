/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (28.24%)
 * Likes:    3480
 * Dislikes: 135
 * Total Accepted:    287K
 * Total Submissions: 1M
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == '(') {  // 左括号的索引入栈 
      stack.push(i);
    } else {
      stack.pop();     // 遇到右括号，栈顶出栈
      if (stack.length == 0) { // 栈变空了，右括号匹配不到人了
        stack.push(i);         // 说明它要充当“参照物”了
      } else {                 // 右括号找到匹配，计算有效的连续长度，挑战最大
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLen;
}
// @lc code=end
