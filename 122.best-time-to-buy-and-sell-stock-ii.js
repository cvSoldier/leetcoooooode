/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (56.67%)
 * Likes:    2707
 * Dislikes: 1784
 * Total Accepted:    644.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array prices for which the i^th element is the price of a
 * given stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit
 * = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 =
 * 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= prices.length <= 3 * 10 ^ 4
 * 0 <= prices[i] <= 10 ^ 4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   var begin = 0, total = 0
//   for(var end = 1; end < prices.length; end++) {
//     if(prices[end] > prices[begin]) {
//       if(prices[end + 1] && prices[end + 1] > prices[end]) {
//         continue
//       } else {
//         total += prices[end] - prices[begin]
//         begin = end
//       }
//     } else {
//       begin = end
//     }
//   }
//   return total
// };

// 上面代码的第二个continue的 if 没有必要 

var maxProfit = function(prices) {
  var begin = 0, total = 0, len = prices.length;
  for(; begin < len - 1; begin++) {
    if(prices[begin + 1] - prices[begin] > 0) {
      total += prices[begin + 1] - prices[begin]
    }
  }
  return total
}
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));
// @lc code=end

