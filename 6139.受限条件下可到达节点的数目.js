/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
// https://leetcode.cn/problems/reachable-nodes-with-restrictions/
// 比常见的 bfs 多了一步需要自己建图
var reachableNodes = function(n, edges, restricted) {
  const restrictedMap = {}
  for(let i = 0; i < restricted.length; ++i) {
    restrictedMap[restricted[i]] = 1
  }
  const map = {}
  for(let i = 0; i < edges.length; ++i) {
    const curNode = edges[i]
    if( !map[curNode[0]]) map[curNode[0]] = {
      node: curNode[0],
      children: []
    }
    if( !map[curNode[1]]) map[curNode[1]] = {
      node: curNode[1],
      children: []
    }

    if(!restrictedMap[curNode[1]]) {
      map[curNode[0]].children.push(map[curNode[1]])
    }
    if(!restrictedMap[curNode[0]]) {
      map[curNode[1]].children.push(map[curNode[0]])
    }
  }
  const visitedMap = {}
  let q = [map[0]]
  while(q.length) {
    const curNode = q.shift()
    if(!restrictedMap[curNode.node]) {
      if(curNode.children) {
        for(let i = 0; i < curNode.children.length; ++i) {
          const curChild = curNode.children[i]
          if(!visitedMap[curChild.node]) {
            q.push(curChild)
          }
        }
      }
      if(!visitedMap[curNode.node]) {
        visitedMap[curNode.node] = 1
      }
    }
  }
  return Object.keys(visitedMap).length
};

// console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]],[4,5]));
// console.log(reachableNodes(7, [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]],[4,2,1]));
// console.log(reachableNodes(2, [[0,1]],[1]));
// console.log(reachableNodes(5,[[0,1],[2,1],[1,4],[1,3]],[2]));
// console.log(reachableNodes(10,[[8,2],[2,5],[5,0],[2,7],[1,7],[3,8],[0,4],[3,9],[1,6]],[9,8,4,5,3,1]));
// console.log(reachableNodes(10,[[4,1],[1,3],[1,5],[0,5],[3,6],[8,4],[5,7],[6,9],[3,2]],[2,7])); // 8