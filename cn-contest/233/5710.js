/**
 * @param {number[][]} orders
 * @return {number}
 */
function BinaryXiaoHeap() {
  this.list = []
}
BinaryXiaoHeap.prototype = {
  first() {
    return this.list[0]
  },
  push(data) { 
    this.list.push(data)
    this._moveUp()
  },
  pop() {
    const data = this.list[0]
    this.list[0] = this.list[this.list.length - 1]
    this.list.pop()
    this.list.length && this._moveDown(0)
    return data
  },
  // 节点上浮
  _moveUp() {
    let childIndex = this.list.length - 1
    let parentIndex = (childIndex - 1) >>> 1
    let temp = this.list[childIndex]
    while(childIndex > 0 && temp[0] < this.list[parentIndex][0]) {
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
      if(child < this.list.length - 1 && this.list[child + 1][0] < this.list[child][0]) {
        // 如果有两个子节点, 将父节点下沉到更小的节点的位置
        child++
      }
      if(this.list[child][0] < temp[0]) {
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
function BinaryDaHeap() {
  this.list = []
}
BinaryDaHeap.prototype = {
  first() {
    return this.list[0]
  },
  push(data) { 
    this.list.push(data)
    this._moveUp()
  },
  pop() {
    const data = this.list[0]
    this.list[0] = this.list[this.list.length - 1]
    this.list.pop()
    this.list.length && this._moveDown(0)
    return data
  },
  // 节点上浮
  _moveUp() {
    let childIndex = this.list.length - 1
    let parentIndex = (childIndex - 1) >>> 1
    let temp = this.list[childIndex]
    while(childIndex > 0 && temp[0] > this.list[parentIndex][0]) {
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
      if(child < this.list.length - 1 && this.list[child + 1][0] > this.list[child][0]) {
        // 如果有两个子节点, 将父节点下沉到更小的节点的位置
        child++
      }
      if(this.list[child][0] > temp[0]) {
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
var getNumberOfBacklogOrders = function(orders) {
  var buys = new BinaryDaHeap()
  var sells = new BinaryXiaoHeap()
  for(let i = 0; i < orders.length; ++i) {
    let temp = orders[i]
    if(temp[2] === 0) {
      // 价格大于等于 sells【0】
      while(sells.first() && temp[0] >= sells.first()[0] && temp[1] > 0) {
        if(temp[1] >= sells.first()[1]) {
          temp[1] -= sells.first()[1]
          sells.first()[1] = 0
          sells.pop()
        } else {
          sells.first()[1] -= temp[1]
          temp[1] = 0
        }
      }
      if(temp[1] !== 0) buys.push(temp)
    } else {
      while(buys.first() && temp[0] <= buys.first()[0] && temp[1] > 0) {
        if(temp[1] >= buys.first()[1]) {
          temp[1] -= buys.first()[1]
          buys.first()[1] = 0
          buys.pop()
        } else {
          buys.first()[1] -= temp[1]
          temp[1] = 0
        }
      }
      if(temp[1] !== 0) sells.push(temp)
    }
  }
  let result = 0
  for(let i = 0; i < orders.length; ++i) {
    result += orders[i][1]
  }
  return result % (1000000007)
};
// [10,5,0],
// console.log(getNumberOfBacklogOrders([[10,5,0],[15,2,1],[25,1,1],[30,4,0]]));
// console.log(getNumberOfBacklogOrders([[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]));
console.log(getNumberOfBacklogOrders([[17,12,1],[15,30,1],[22,18,0],[13,26,0],[17,25,0],[14,2,1],[28,12,0]]));
