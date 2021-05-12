/*
 * @lc app=leetcode id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 *
 * https://leetcode.com/problems/corporate-flight-bookings/description/
 *
 * algorithms
 * Medium (53.03%)
 * Likes:    686
 * Dislikes: 123
 * Total Accepted:    25.5K
 * Total Submissions: 46.9K
 * Testcase Example:  '[[1,2,10],[2,3,20],[2,5,25]]\n5'
 *
 * There are n flights that are labeled from 1 to n.
 * 
 * You are given an array of flight bookings bookings, where bookings[i] =
 * [firsti, lasti, seatsi] represents a booking for flights firsti through
 * lasti (inclusive) with seatsi seats reserved for each flight in the range.
 * 
 * Return an array answer of length n, where answer[i] is the total number of
 * seats reserved for flight i.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
 * Output: [10,55,45,25,25]
 * Explanation:
 * Flight labels:        1   2   3   4   5
 * Booking 1 reserved:  10  10
 * Booking 2 reserved:      20  20
 * Booking 3 reserved:      25  25  25  25
 * Total seats:         10  55  45  25  25
 * Hence, answer = [10,55,45,25,25]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: bookings = [[1,2,10],[2,2,15]], n = 2
 * Output: [10,25]
 * Explanation:
 * Flight labels:        1   2
 * Booking 1 reserved:  10  10
 * Booking 2 reserved:      15
 * Total seats:         10  25
 * Hence, answer = [10,25]
 * 
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 2 * 10^4
 * 1 <= bookings.length <= 2 * 10^4
 * bookings[i].length == 3
 * 1 <= firsti <= lasti <= n
 * 1 <= seatsi <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const result = new Array(n).fill(0)
  for(let i = 0; i < bookings.length; ++i) {
    const booking = bookings[i]
    for(let j = booking[0]; j <= booking[1]; ++j) {
      result[j - 1] += booking[2]
    }
  }
  return result
};
// @lc code=end

