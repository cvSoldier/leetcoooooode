/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (47.37%)
 * Likes:    2056
 * Dislikes: 91
 * Total Accepted:    309.7K
 * Total Submissions: 643.6K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = []
  backtrack(nums.sort(), result, new Map(), [], {})
  return result
};
function backtrack(nums, result, map, cur, curIndex) {
  // debugger
  if(!map.get(Object.values(curIndex).join())) {
    result.push(cur.slice())
    map.set(Object.values(curIndex).join(), 1)
  }
  for(let i = 0; i < nums.length; ++i) {
    if(curIndex[i] === undefined) {
      if (nums[i] === nums[i - 1] && !curIndex[i - 1]) continue
      curIndex[i] = nums[i]
      cur.push(nums[i])
      backtrack(nums, result, map, cur, curIndex)
      cur.pop()
      delete curIndex[i]
    }
  }
}
console.log(subsetsWithDup([1,4,3,5,4,4,7,7,8,0]));
// console.log(subsetsWithDup([4,4,4,1,4]));
console.log(subsetsWithDup([1,2,2]));
// console.log(subsetsWithDup([0]));

// @lc code=end

