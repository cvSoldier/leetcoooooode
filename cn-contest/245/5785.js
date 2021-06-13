/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
 var mergeTriplets = function(triplets, target) {
  let [a, b, c]  = target, k1, k2, k3 = 0
  for(const [x, y, z] of triplets) {
      if (x > a || y > b || z > c) continue
      if (x === a) k1 = 1
      if (y === b) k2 = 1
      if (z === c) k3 = 1
  }
  return k1 === 1 && k2 === 1 && k3 ===1
};