/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  if(nums.length === 1) return nums
  // 偶数位找最大值
  let findEven = true
  const res = []
  for(let i = 1; i < nums.length; ++i) {
    if(findEven) {
      if(nums[i] < nums[i - 1]) {
        findEven = !findEven
        res.push(nums[i - 1])
      }
    } else {
      if(nums[i] > nums[i - 1]) {
        findEven = !findEven
        res.push(nums[i - 1])
      }
    }
  }
  if(findEven) res.push(nums[nums.length - 1])
  let ansNum = 0
  for(let i = 0; i < res.length; i += 2) {
    ansNum += res[i] - (res[i + 1] || 0)
  }
  debugger
  return ansNum
};
console.log(maxAlternatingSum([4,2,5,3]));
console.log(maxAlternatingSum([5,6,7,8]));
console.log(maxAlternatingSum([6,2,1,2,4,5]));