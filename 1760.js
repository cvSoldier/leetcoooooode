/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let l = 0
  let r = Math.max.apply(null, nums)
  while(l + 1 < r) {
    let mid = (l + r) >> 1,
      temp = 0
    for(let i = 0; i < nums.length; ++i) {
      temp += Math.floor((nums[i] - 1) / mid)
    }
    if(temp <= maxOperations) {
      r = mid
    } else {
      l = mid
    }
  }
  return r
};
// 复杂度 nlogC n是数组长度， C是数组最大值
// console.log(minimumSize([2,4,8,2], 4));
