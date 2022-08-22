/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @url https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected/
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
 var amountOfTime = function(root, start) {
  // 建无向图 + bfs
  let q = [root]
  const graph = {}
  while(q.length) {
    const curNode = q.shift()

    if(!graph[curNode.val]) graph[curNode.val] = []
    
    if(curNode.left) {
      q.push(curNode.left)

      graph[curNode.val].push(curNode.left.val)

      if(!graph[curNode.left.val]) graph[curNode.left.val] = []
      graph[curNode.left.val].push(curNode.val)
    }

    if(curNode.right) {
      q.push(curNode.right)

      graph[curNode.val].push(curNode.right.val)

      if(!graph[curNode.right.val]) graph[curNode.right.val] = []
      graph[curNode.right.val].push(curNode.val)
    }
  }

  let deep = -1
  q = [start]
  const visitedMap = {}
  while(q.length) {
    deep++
    const curQ = [...q]
    q.length = 0
    for(let i = 0; i < curQ.length; ++i) {
      const curVal = curQ[i]
      visitedMap[curVal] = 1
      for(let j = 0; j < graph[curVal].length; ++j) {
        !visitedMap[graph[curVal][j]] && q.push(graph[curVal][j])
      }
    }
  }
  return deep
};

// 其他思路：非start节点最深层级 + start节点层级 vs start bfs
// if(非start节点最深层级 + start节点层级 <= 以start为根的最深层 ) return 以start为根的最深层
// else return 非start节点最深层级 + start节点层级