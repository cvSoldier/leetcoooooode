/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (34.87%)
 * Likes:    5372
 * Dislikes: 366
 * Total Accepted:    450.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given two strings s and t, return the minimum window in s which will contain
 * all the characters in t. If there is no such window in s that covers all
 * characters in t, return the empty string "".
 * 
 * Note that If there is such a window, it is guaranteed that there will always
 * be only one unique minimum window in s.
 * 
 * 
 * Example 1:
 * Input: s =  
 * Output: "BANC"
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length, t.length <= 10^5
 * s and t consist of English letters.
 * 
 * 
 * 
 * Follow up: Could you find an algorithm that runs in O(n) time?
 */

// @lc code=start
/**  
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = {}
  for(let len = t.length - 1; len >= 0; --len) {
    map[t[len]] ? map[t[len]]++ : map[t[len]] = 1
  }
  let typeToFind = Object.keys(map).length
  let min = s.length + 1
  let begin = end = 0
  let _begin = 0
  for(; end < s.length; ++end) {
    // 判断条件应该是 !== undefined 就 --
    // 这样才能配合 备注 1 的地方处理当前字符串包含重复目标字符的情况
    if(map[s[end]] !== undefined) {
      if(--map[s[end]] === 0) typeToFind--
    }

    while(typeToFind === 0) {
      if (min > end - begin) {
        min = end - begin
        _begin = begin
      }
      // 备注 1
      if(map[s[begin]] !== undefined) {
        if(map[s[begin]]++  === 0) typeToFind++
      }
      begin++
    }
  }
  // min没有更新过 说明找不到
  if (min === s.length + 1) return ''
  return s.slice(_begin, _begin + min + 1)
};
// console.log(minWindow('ADOBCEOBANC', 'ABC'));
// console.log('a:', minWindow('B', 'C'));

// @lc code=end
