/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (50.14%)
 * Likes:    1385
 * Dislikes: 411
 * Total Accepted:    358.6K
 * Total Submissions: 699.9K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 * 
 * 
 * Follow up:
 * 
 * 
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//   var map = {}, result = []
//   for(let i = 0, len = nums1.length; i < len; i++) {
//     map[nums1[i]] ? map[nums1[i]]++ : map[nums1[i]] = 1
//   }
//   for(let i = 0, len = nums2.length; i < len; i++) {
//     if(map[nums2[i]]) {
//       map[nums2[i]]--
//       result.push(nums2[i])
//     }
//   }
//   return result
// };
var intersect = function(nums1, nums2) {
  const map = nums1.reduce((map, n) => {
    map[n] = map.hasOwnProperty(n) ? map[n] + 1 : 1
    return map
  }, {})
  return nums2.filter(el => {
    if(map.hasOwnProperty(el) && map[el] > 0) {
      map[el]--
      return true
    }
    return false
  })
};
// @lc code=end

