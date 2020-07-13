/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  debugger
  const answer = []
  backTracking(n, 0, 0, '', answer)
  return answer
};
function backTracking(n, headNum, tailNum, str, ans) {
  if(headNum === n && tailNum === n) {
    ans.push(str)
  }
  if(headNum >= tailNum && headNum <= n) {
    backTracking(n, headNum + 1, tailNum, str + '(', ans)
    backTracking(n, headNum, tailNum + 1, str + ')', ans)
  }
}
console.log(generateParenthesis(3));

// @lc code=end

