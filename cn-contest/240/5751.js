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

// to do 还能二分