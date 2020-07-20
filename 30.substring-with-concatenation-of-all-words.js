/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (25.31%)
 * Likes:    864
 * Dislikes: 1244
 * Total Accepted:    177.3K
 * Total Submissions: 700.6K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if(words.length === 0) return []
  function fucktion(map, s, wordLen, n, begin) {
    if(n === 0) return true
    var str = s.substring(begin, begin + wordLen)
    if(map[str]) { // 妹想到 map 还能这么用
      map[str]--
      return fucktion({ ...map }, s, wordLen, --n, begin + wordLen)
    } else {
      return false
    }
  }
  var result = []
  var map = words.reduce((map, item) => {
    map[item] ? map[item]++ : map[item] = 1
    return map
  }, {})
  var limit = s.length - words[0].length * words.length + 1
  for(var i = 0; i < limit; i++) {
    fucktion({...map}, s, words[0].length, words.length, i) && result.push(i)
  }
  return result
}
// @lc code=end

