/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (57.30%)
 * Likes:    4014
 * Dislikes: 197
 * Total Accepted:    744.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lower-case English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let len = strs.length
  const result = {}
  while(--len >= 0) {
    // const map = {}
    // let strLen = strs[len].length
    // while(--strLen >= 0) {
    //   map[strs[len][strLen]] ? map[strs[len][strLen]]++ : map[strs[len][strLen]] = 1
    // }
    // const keys = Object.keys(map).sort()
    // let keysLen = keys.length
    // let temp = ''
    // while(--keysLen >= 0) {
    //   temp += keys[keysLen] + map[keys[keysLen]]
    // }
    // result[temp] ? result[temp].push(strs[len]) : result[temp] = [strs[len]]
    const key = strs[len].split('').sort().join('')
    result[key] ? result[key].push(strs[len]): result[key] = [strs[len]]
  }
  // debugger
  return Object.values(result)
}
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// @lc code=end
