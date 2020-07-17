/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (62.09%)
 * Likes:    843
 * Dislikes: 1229
 * Total Accepted:    367.3K
 * Total Submissions: 591.1K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result must be unique.
 * The result can be in any order.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var map = {}
  var result = []
  for (var i = 0, len = nums1.length; i < len; i++) {
    map[nums1[i]] = 1
  }
  for (var i = 0, len = nums2.length; i < len; i++) {
    if (map[nums2[i]]) {
      result.push(nums2[i])
      map[nums2[i]] = 0
    }
  }
  return result
};
// @lc code=end

