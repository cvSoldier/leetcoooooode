// https://leetcode-cn.com/problems/car-fleet-ii/

/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
  var ans = new Array(cars.length)
  var stack = []
  for(let i = cars.length - 1; i >= 0; --i) {
    while(stack.length) {
      if(cars[stack[stack.length - 1]][1] >= cars[i][1]) stack.pop()
      else {
        if(ans[stack[stack.length - 1]] < 0) break
        // 能不能在前面车合并前撞
        var d = ans[stack[stack.length - 1]] * (cars[i][1] - cars[stack[stack.length - 1]][1])
        if(d > cars[stack[stack.length - 1]][0] - cars[i][0]) break

        else stack.pop()
      }
    }
    if(stack.length === 0) ans[i] = -1
    else ans[i] = ((cars[stack[stack.length - 1]][0] - cars[i][0]) / (cars[i][1] - cars[stack[stack.length - 1]][1])).toFixed(5)
    stack.push(i)
  }
  return ans
};

console.log(getCollisionTimes([[1,2],[2,1],[4,3],[7,2]]));
console.log(getCollisionTimes([[3,4],[5,4],[6,3],[9,1]]));
