/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (40.46%)
 * Likes:    1892
 * Dislikes: 92
 * Total Accepted:    190.7K
 * Total Submissions: 438.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  backTrack(board, 0, 0)
};
function backTrack(board, i, j) {
  if(j > 8) {
    i++; j = 0
    if(i > 8) {
      return true
    }
  }
  
  if(board[i][j] === '.') {
    for(let num = 1; num <= 9; num++) {
      if(validPartial(board, i, j, String(num))){
        board[i][j] = String(num)
        if (backTrack(board, i, j + 1)) return true
        board[i][j] = '.'
      }
    }
  } else {
    return backTrack(board, i, j + 1)
  }
  return false
}

function validPartial(board, i, j, c) {
  for(var x = 0; x < 9; x++) {
    if (board[i][x] === c) return false;
  }
  for(var y = 0; y < 9; y++) {
    if (board[y][j] === c) return false;
  }
  var row = i - i % 3, col = j - j % 3;
  for(var x = 0; x < 3; x++) {
    for(var y = 0; y < 3; y++) {
      if (board[row + x][col + y] === c) return false;
    }
  }
  return true;
}
// function deepClone (arr) {
//   const result = []
//   for(let i = 0; i < arr.length; i++ ) {
//     if(Array.isArray(arr[i])) {
//       result[i] = deepClone(arr[i])
//     } else {
//       result[i] = arr[i]
//     }
//   }
//   return result
// }
// var board = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// solveSudoku(board)
// console.log('llll', board[8]);

// @lc code=end

