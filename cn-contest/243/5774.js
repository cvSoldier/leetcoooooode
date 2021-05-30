class Heap {
  constructor(compare) {
    this.A = [];
    this.compare = compare;
  }
  size() {
    return this.A.length;
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return i > 0 ? (i - 1) >>> 1 : -1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.A[0];
  }
  heapifyDown(i) {
    let p = i;
    const l = this.left(i),
      r = this.right(i),
      size = this.size();
    if (l < size && this.compare(l, p)) p = l;
    if (r < size && this.compare(r, p)) p = r;
    if (p !== i) {
      this.exchange(i, p);
      this.heapifyDown(p);
    }
  }
  heapifyUp(i) {
    const p = this.parent(i);
    if (p >= 0 && this.compare(i, p)) {
      this.exchange(i, p);
      this.heapifyUp(p);
    }
  }
  exchange(x, y) {
    const temp = this.A[x];
    this.A[x] = this.A[y];
    this.A[y] = temp;
  }
  compare() {
    throw new Error('Must be implement!');
  }
}

class PriorityQueue extends Heap {
  constructor(compare) {
    super(compare);
  }
  enqueue(node) {
    this.A.push(node);
    this.heapifyUp(this.size() - 1);
  }
  dequeue() {
    const first = this.A[0];
    const last = this.A.pop();
    if (first !== last) {
      this.A[0] = last;
      this.heapifyDown(0);
    }
    return first;
  }
}
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
  const Q = new PriorityQueue(function(i, p) {
    const child = this.A[i]
    const parent = this.A[p]
    if(child.value < parent.value) { 
      return true
    } else if (child.value === parent.value) {
      if(child.index < parent.index) return true
    }
    return false
  })
  servers.map((value, index)=> Q.enqueue({value, index}))
  const doing = []
  const res = []
  
  let taskIndex = 0
  let doingIndex = 0
  while(taskIndex < tasks.length || doingIndex < doing.length) {
    // debugger
    if(doing[doingIndex]) {
      const servers = doing[doingIndex].queue
      servers.map(item => {
        Q.enqueue(item)
      })
    }
    if(taskIndex < tasks.length) {
      if(Q.size() > 0) {
        debugger
        const server = Q.dequeue()
        // 分配server
        res[taskIndex] = server.index
        // 当前 i + task需要处理的时长
        const index = doingIndex + tasks[taskIndex]
        doing[index] ? doing[index].queue.push(server) : doing[index] = {
          index,
          queue: [server]
        }
        taskIndex++
      }
    }
    doingIndex++
  }
  // debugger
  return res
};

// console.log(assignTasks([3,3,2], [1,2,3,2,1,2]));
// console.log(assignTasks([5,1,4,3,2], [2,1,2,4,5,2,1]));
// console.log(assignTasks([10,63,95,16,85,57,83,95,6,29,71], [70,31,83,15,32,67,98,65,56,48,38,90,5]));
console.log(assignTasks([31,96,73,90,15,11,1,90,72,9,30,88], [87,10,3,5,76,74,38,64,16,64,93,95,60,79,54,26,30,44,64,71]));
