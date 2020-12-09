/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const map = {}
  let result = 0
  for(let i = 0; i < nums.length; ++i) {
    if(map[k - nums[i]] > 0) {
      map[k - nums[i]]--
      result++
    } else {
      map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }
  }
  return result
};

console.log(maxOperations([3,1,4,3], 6));
console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3));