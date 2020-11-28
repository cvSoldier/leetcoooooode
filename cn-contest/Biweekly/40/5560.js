
var FrontMiddleBackQueue = function() {
  this.queue = []
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.queue.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  var index = this.queue.length >> 1
  this.queue.splice(index, 0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.queue.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  return this.queue.shift() || -1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if(this.queue.length === 0) return -1
  var index = this.queue.length >> 1
  this.queue.length % 2 === 0 ? index-- : null
  const num = this.queue[index]
  this.queue.splice(index, 1)
  return num
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  return this.queue.pop() || -1
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */