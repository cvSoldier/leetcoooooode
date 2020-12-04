/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (24.87%)
 * Likes:    3217
 * Dislikes: 3157
 * Total Accepted:    449.5K
 * Total Submissions: 1.8M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * The answer is guaranteed to fit in a 32-bit integer.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "0"
 * Output: 0
 * Explanation: There is no character that is mapped to a number starting with
 * '0'. We cannot ignore a zero when we face it while decoding. So, each '0'
 * should be part of "10" --> 'J' or "20" --> 'T'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: s = "1"
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 100
 * s contains only digits and may contain leading zero(s).
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 答案
var numDecodings = function (str) {
  if (str.length <= 0) {
    return 0;
  }
  let current = 1,
      next = 0;
  for (let i = 0; i < str.length; i++) {
    let next2 = 0;
    if (str[i] !== '0') {
      next += current;
      if (str[i] + str[i + 1] <= '26') {
        next2 = current;
      }
    }
    current = next;
    next = next2;
    if (current === '0') {
      break;
    }
  }
  return current;
};
// 我的
// var numDecodings = function(s) {
//   // debugger
//   let T1 = 0 // export
//   let T2 = 0 // without export
//   let T = 0
//   for(let i = 0; i < s.length; ++i) {
//     if(s[i] != 0) {
//       T1 = T = 1
//       i++
//       for(; i < s.length; ++i) {
//         if(s[i] == 0) {
//           T2 = T1
//           T1 = 0
//         } else {
//           if(s[i - 1] + s[i] > 26) {
//             T2 = 0
//             T1 = T
//           } else {
//             T2 = T1
//             T1 = T
//           }
//         }
//         T = T1 + T2
//       }
//       return T
//     } else {
//       break
//     }
//   }
//   return T
// };

console.log(numDecodings('0'));
console.log(numDecodings('27'));
console.log(numDecodings('226'));
console.log(numDecodings('2261'));
console.log(numDecodings('12120'));
console.log(numDecodings('1212'));
console.log(numDecodings('2101'));
console.log(numDecodings('01'));
console.log(numDecodings('230')); // 折磨人 这道题抄答案
// @lc code=end