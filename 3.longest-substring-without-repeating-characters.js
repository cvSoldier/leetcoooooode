/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (30.53%)
 * Likes:    13308
 * Dislikes: 688
 * Total Accepted:    2M
 * Total Submissions: 6.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: s = ""
 * Output: 0
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {}
  var max = 0
  // debugger
  for(let begin = 0, end = 0; end < s.length; end++) {
    if(map[s[end]] === undefined) {
      map[s[end]] = end
    } else {
      begin = Math.max(map[s[end]] + 1, begin)
      map[s[end]] = end
    }
    max = Math.max(max, end - begin + 1)
  }
  return max
};
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('abba'));

// @lc code=end

