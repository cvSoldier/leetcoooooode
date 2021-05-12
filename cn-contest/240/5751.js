// https://leetcode-cn.com/problems/maximum-distance-between-a-pair-of-values/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
  let l = 0
  let r = 0
  let max = 0
  while(l < nums1.length) {
    if (nums1[l] <= nums2[r]) {
      max = Math.max(max, r - l)
      r++
    } else if (++l > r) {
      r = l
    }
  }
  return max
};

console.log(maxDistance([55,30,5,4,2], [100,20,10,10,5]))
// to do 还能二分
// 双指针 O(n + m), 二分 O(nlogm)
// 而且数组是非递增，存在相同项，考虑到二分的最坏情况，还是应该双指针