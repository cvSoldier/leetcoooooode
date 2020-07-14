/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.37%)
 * Likes:    1190
 * Dislikes: 5236
 * Total Accepted:    280.5K
 * Total Submissions: 1.7M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero, which means losing its
 * fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) =
 * -2.
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Explanation: 10/3 = truncate(3.33333..) = 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * Explanation: 7/-3 = truncate(-2.33333..) = -2.
 * 
 * 
 * Note:
 * 
 * 
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 2^31 − 1 when the
 * division result overflows.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  function chengfu1(num) {
    return 0 - num
  }
  const bool1 = dividend > 0
  const bool2 = divisor > 0
  const fuhao = bool1 === bool2
  !bool1 && (dividend = chengfu1(dividend))
  !bool2 && (divisor = chengfu1(divisor))
  
  let result = 0, temp = 0
  while(true) {
    if(temp < dividend) {
      temp += divisor
      result++
    } else if (temp === dividend) {
      break
    } else {
      result--
      break
    }
  }
  
  if(fuhao) {
    return result
  } else {
    return chengfu1(result)
  }
};

console.log(divide(-2147483648, -1));

// @lc code=end

