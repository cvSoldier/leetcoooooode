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
  let result = []
  backTrack(board, 0, 0, board.length, result)
  for(let i = 0; i < board.length; i++) {
    board[i] = result[0] && result[0][i]
  }
};
function backTrack(board, i, j, len, result) {
  // debugger
  if(j > 8) {
    i++; j = 0
    if(i > 8) {
      result.push(JSON.parse(JSON.stringify((board))))
      return
    }
  }
  
  if(board[i][j] === '.') {
    for(let num = 1; num <= 9; num++) {
      board[i][j] = String(num)
      validPartial(board, i, j) && backTrack(board, i, j + 1, len, result)
      board[i][j] = '.'
    }
  } else {
    backTrack(board, i, j + 1, len, result)
  }
}
function hasRepeatNum(nums) {
  var map = {}
  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] && nums[i] !== '.') return true
    map[nums[i]] = true
  }
  return false
}
function validPartial(board, i, j) {
  var valid = !hasRepeatNum(board[i])
  var arr = []
  if(valid) {
    map = Object.create(null)
    for(let index = 0; index < board[i].length; index++) {
      arr.push(board[index][j])
    }
    valid = !hasRepeatNum(arr)
    arr.length = 0
  }
  if(valid) {
    let positionI = Math.floor(i / 3), positionJ =  Math.floor(j / 3)
    for(let x = 0; x < 3; x++) {
      for(let y = 0; y < 3; y++) {
        arr.push(board[positionI * 3 + x][positionJ * 3 + y])
      }
    }
    valid = !hasRepeatNum(arr)
    arr.length = 0
  }
  return valid
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

// @lc code=end

