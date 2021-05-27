// https://leetcode-cn.com/problems/minimum-speed-to-arrive-on-time/
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  let l = 1
  let r = Math.pow(10, 9)
  while(l <= r) {
    let mid = (l + r) >> 1
    if(helper(dist, mid, hour)) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return helper(dist, l, hour) ? -1 : l

  function helper(dist, speed, hour) {
    let total = 0
    for(let i = 0; i < dist.length; ++i) {
      if (i === dist.length - 1) {
       total += dist[i] / speed
      } else {
       total += Math.ceil(dist[i] / speed)
      }
    }
    return total > hour
  }
};
console.log(minSpeedOnTime([1,3,2], 6));
console.log(minSpeedOnTime([1,3,2], 1.9));

// 经 典 二 分
