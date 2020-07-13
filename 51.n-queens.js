/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var result = []
  backTrack(n, result, 0, [], [], [])
  return result
};
function backTrack(n, result, rows, columns, rowCol, colRow) {
  // debugger
  if(n === rows) {
    result.push(columns.map(_ => '.'.repeat(_) + 'Q' + '.'.repeat(n - _ + 1)))
  }
  for(let i = 0; i < n; i++) {
    if(columns.indexOf(i) === -1 &&
      rowCol.indexOf(i - rows) === -1 &&
      colRow.indexOf(i + rows) === -1) {
        columns.push(i)
        rowCol.push(i - rows)
        colRow.push(i + rows)
        backTrack(n, result, rows + 1, columns, rowCol, colRow)
        columns.pop()
        rowCol.pop()
        colRow.pop()
      }
  }
}
console.log(...solveNQueens(4));

// @lc code=end

