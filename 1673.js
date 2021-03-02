// https://leetcode.com/problems/find-the-most-competitive-subsequence/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  var ans = [], len = nums.length
  for(let i = 0; i < len; ++i) {
    while(ans.length && ans[ans.length - 1] > nums[i] && k - ans.length <= len - i) ans.pop()
    ans.push(nums[i])
  }
  return ans.slice(0, k)
};
// console.log(mostCompetitive([3, 5, 2, 6], 2));
// console.log(mostCompetitive([2,4,3,3,5,4,9,6,7,8], 4));
// console.log(mostCompetitive([71,18,52,29,55,73,24,42,66,8,80,2], 3));
