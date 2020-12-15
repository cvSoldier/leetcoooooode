/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (45.53%)
 * Likes:    2121
 * Dislikes: 292
 * Total Accepted:    510.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * Each string consists only of '0' or '1' characters.
 * 1 <= a.length, b.length <= 10^4
 * Each string is either "0" or doesn't contain any leading zero.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// v1
// var addBinary = function(a, b) {
//   let iterA = a.length - 1
//   let iterB = b.length - 1
//   let result = ''
//   let plusOne = 0
//   // debugger
//   while(iterA >= 0 || iterB >= 0) {
//     // debugger
//     var num = (Number(a[iterA--]) || 0) + (Number(b[iterB--]) || 0) + plusOne
//     if(num > 1) {
//       num -= 2
//       plusOne = 1
//     } else {
//       plusOne = 0
//     }
//     result = num + result
//   }
//   if(plusOne) result = '1' + result
//   return result
// };

// v2
var addBinary = function(a, b) {
  return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2)
}
// console.log(addBinary('11', '1'))
// console.log(addBinary('1010', '1011'))
// console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))
// @lc code=end
