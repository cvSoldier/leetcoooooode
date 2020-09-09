/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Hard (38.61%)
 * Likes:    1808
 * Dislikes: 341
 * Total Accepted:    208.2K
 * Total Submissions: 539.3K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * Given n and k, return the k^th permutation sequence.
 * 
 * Note:
 * 
 * 
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// 传统 backtrack
// var getPermutation = function(n, k) {
//   const nums = []
//   for(let i = 1; i <= n; i++) nums.push(i)

//   var result = [0, undefined]
//   backtrack(nums, 0, k, [], result)
//   return result[1].join('')
// };
// function backtrack(nums, n, targetK, curr, result) {
//   // debugger
//   if(n === nums.length) {
//     if(++result[0] === targetK) {
//       result[1] = [...curr]
//     }
//     return
//   }
//   for(let i = 0; i < nums.length; ++i) {
//     if(!curr.includes(nums[i]) && !result[1]) {
//       curr.push(nums[i])
//       backtrack(nums, n + 1, targetK, curr, result)
//       curr.pop()
//     }
//   }
// }

// Another backtrack
var getPermutation = function(n, k) {
  const nums = [], factorial = [1, 1]
  
  for(let i = 1; i <= n; ++i) nums.push(i)
  for(let i = 2; i < n; ++i) factorial[i] = (i * factorial[i - 1])

  return backtrack(nums, k - 1, '', factorial) // k 从零开始
};
function backtrack(nums, k, str, factorial) {
  if(nums.length === 1) {
    return str + nums[0]
  }
  var chushu = Math.floor(k / factorial[nums.length - 1])
  var yushu = k % factorial[nums.length - 1]
  str += nums.splice(chushu, 1)[0]
  return backtrack(nums, yushu, str, factorial)
}

// console.log(getPermutation(4, 9));

// @lc code=end

