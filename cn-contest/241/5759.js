var subsetXORSum = function(nums) {
  let result = 0
  for(let i = 0; i < nums.length; ++i) {
    for(let j = 0; j < nums.length; ++j) {
      debugger
      let temp = i
      let num = 0
      while(temp <= j) {
        num ^= nums[temp++]
      }
      result += num
    }
  }

  return result
};
var subsets = function(nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
      const t = [];
      for (let i = 0; i < n; ++i) {
          if (mask & (1 << i)) {
              t.push(nums[i]);
          }
      }
      ans.push(t);
  }
  debugger
  let result = 0
  for(let i = 0; i < ans.length; ++i) {
    let arr = ans[i]
    let num = 0
    arr.map(value => {
      num ^= value
    })
    result += num
  }
  return result
};
console.log(subsets([3,4,5,6,7,8]))