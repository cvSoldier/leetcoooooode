/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const res = []
  // debugger
  for(let i = 0; i < grid.length - 2; ++i) {
    const curArr = []
    for(let j = 0; j < grid.length - 2; ++j) {
      curArr.push(max(grid, i, j))
    }
    res.push(curArr)
  }
  return res
  function max (grid, row, col) {
    let res = 0
    for(let i = 0; i < 3; ++i) {
      for(let j = 0; j < 3; ++j) {
        res = Math.max(res, grid[row + i][col + j])
      }
    }
    return res
  }
};

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))