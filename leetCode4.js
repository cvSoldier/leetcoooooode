/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
module.exports = function findMedianSortedArrays (nums1, nums2) {
  const totalLen = nums1.length + nums2.length
  let even = totalLen % 2 === 0
  let len = parseInt(totalLen / 2) + 1
  let arr = []
  let i1 = 0, i2 = 0
  while(len > 0) {
    if(nums1[i1] <= nums2[i2]) {
      arr.push(nums1[i1])
      i1++
    } else {
      arr.push(nums2[i2])
      i2++
    }
    len--
  }
  if(even) {
    return (arr.pop() + arr.pop()) / 2
  } else {
    return arr.pop()
  }
};
