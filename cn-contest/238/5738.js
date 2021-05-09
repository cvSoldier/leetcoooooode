/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  let num = n.toString(k)
  let ans = 0
  for (let i = 0; i < num.length; ++i) {
    ans += Number(num[i])
  }
  return ans
};
console.log(sumBase(34, 6))
