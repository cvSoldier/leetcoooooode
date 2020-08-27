/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (50.34%)
 * Likes:    5642
 * Dislikes: 244
 * Total Accepted:    928.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   var min = prices[0], target = 0
//   for(var i = 1; i < prices.length; i++) {
//     if(prices[i] < min) {
//       min = prices[i]
//       continue
//     }
//     prices[i] - min > target ? target = prices[i] - min : null
//   }
//   return target
// };

var maxProfit = function(prices) {
  var T_i10 = 0, T_i11 = -prices[0]
  for(var i = 1; i < prices.length; i++) {
    T_i10 = Math.max(T_i10, T_i11 + prices[i])
    T_i11 = Math.max(T_i11, - prices[i]) // 限制交易一次 所以第二个是-prices[i]
  }
  return T_i10
};
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,5,4,2]));
// @lc code=end

