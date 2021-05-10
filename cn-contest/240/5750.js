https://leetcode-cn.com/problems/maximum-population-year/
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  const map = {}
  for(let i = 0; i < logs.length; ++i) {
    for(let j = logs[i][0]; j < logs[i][1]; ++j) {
      map[j] ? map[j]++ : map[j] = 1 
    }
  }
  const keys = Object.keys(map)
  let max = 0, maxIndex
  for(let i = keys.length - 1; i >= 0; --i) {
    const key = keys[i]
    if(map[key] >= max) {
      max = map[key]
      maxIndex = key
    }
  }
  return maxIndex
};
console.log(maximumPopulation([[1993,1999],[2000,2010]]))

// to do 差分