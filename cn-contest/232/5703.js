// https://leetcode-cn.com/problems/maximum-average-pass-ratio/
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
function BinaryHeap() {
  this.list = []
}
BinaryHeap.prototype = {
  push(data) { 
    this.list.push(data)
    this._moveUp()
  },
  pop() {
    const data = this.list[0]
    this.list[0] = this.list[this.list.length - 1]
    this.list.pop()
    this._moveDown(0)
    return data
  },
  // 节点上浮
  _moveUp() {
    let childIndex = this.list.length - 1
    let parentIndex = (childIndex - 1) >>> 1
    let temp = this.list[childIndex]
    while(childIndex > 0 && temp.cha > this.list[parentIndex].cha) {
      this.list[childIndex] = this.list[parentIndex]
      childIndex = parentIndex
      parentIndex = (parentIndex - 1) >>> 1
    }
    this.list[childIndex] = temp
  },
  // 节点下沉
  _moveDown(index) {
    let parent = index
    let temp = this.list[parent]
    let child = 2 * parent + 1
    while(child < this.list.length) {
      if(child < this.list.length - 1 && this.list[child + 1].cha > this.list[child].cha) {
        // 如果有两个子节点, 将父节点下沉到更小的节点的位置
        child++
      }
      if(this.list[child].cha > temp.cha) {
        this.list[parent] = this.list[child]
        parent = child
        child = 2 * parent + 1
      } else {
        break
      }
    }
    this.list[parent] = temp
  }
}
var maxAverageRatio = function(classes, extraStudents) {
  var heap = new BinaryHeap()
  for(let i = classes.length - 1; i >= 0; --i) {
    var temp = {
      index: i,
      cha: (classes[i][0] + 1) / (classes[i][1] + 1) - classes[i][0] / classes[i][1]
    }
    heap.push(temp)
  }
  while(extraStudents) {
    var index = heap.list[0].index
    classes[index][0]++
    classes[index][1]++
    heap.list[0].cha = (classes[index][0] + 1) / (classes[index][1] + 1) - classes[index][0] / classes[index][1]
    let data = heap.pop()
    heap.push(data)
    extraStudents--
  }
  let result = 0
  for(let i = classes.length - 1; i >= 0; --i) {
    result += classes[i][0] / classes[i][1]
  }
  return (result / classes.length).toFixed(5)
};