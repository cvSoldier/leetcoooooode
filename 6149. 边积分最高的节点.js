/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  const map = {}
  for(let i = 0; i < edges.length; ++i) {
    if(map[edges[i]] != undefined) {
      map[edges[i]] += i
    } else {
      map[edges[i]] = i
    }
  }
  const keys = Object.keys(map)
  let maxKey = keys[0]
  for(let i = 1; i < keys.length; ++i) {
    if(map[maxKey] < map[keys[i]]) {
      maxKey = keys[i]
    } else if(map[maxKey] === map[keys[i]]) {
      if(maxKey > keys[i]) maxKey = keys[i]
    }
  }
  return maxKey
};