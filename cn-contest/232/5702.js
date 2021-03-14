// https://leetcode-cn.com/problems/find-center-of-star-graph/
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let node1 = edges[0]
  let node2 = edges[1]
  if(node2.includes(node1[0])) return node1[0]
  else return node1[1]
};