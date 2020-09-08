/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [], indexs = []
  backtrack(nums.sort(), indexs, result, [])
  return result
};
function backtrack(nums, indexs, result, curr) {
  if(curr.length === nums.length) {
    result.push([...curr])
    return
  }
  let len = nums.length
  while(--len >= 0) {
    if(indexs[len]) continue
    if(nums[len + 1] === nums[len] && !indexs[len + 1]) continue
    indexs[len] = true
    curr.push(nums[len])
    backtrack(nums, indexs, result, curr)
    indexs[len] = false
    curr.pop(nums[len])
  }
}
// console.log(...permuteUnique([1,1,2]));

// @lc code=end

