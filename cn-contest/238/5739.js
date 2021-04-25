// https://leetcode-cn.com/problems/frequency-of-the-most-frequent-element/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b)
  let i = 0;
  let j = 1;
  let sum = 0
  let ans = 0
  while(j < nums.length) {
    sum += (nums[j] - nums[i]) * (j - i)
    while(sum > k) {
      sum -= (nums[j] - nums[i])
    }
    ans = Math.max(ans, j - i + 1)
  }
  return ans
};
// 这题竟然是滑动窗口，绝了