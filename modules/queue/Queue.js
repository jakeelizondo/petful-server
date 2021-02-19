class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    // if nothing in queue, add to first position
    if (this.first === null) {
      this.first = node;
    }
    // if items in queue, update last to point to new node
    if (this.last) {
      this.last.next = node;
    }
    // if no last, make node last
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.

    //if queue empty, nothing to remove
    if (this.first === null) {
      return;
    }

    // save the current head of line
    const node = this.first;
    //move head of line to next node
    this.first = this.first.next;
    // if node is last item in queue
    if (node === this.last) {
      this.last = null;
    }
    //return the head value
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    const node = this.first;
    if (node === null) {
      return;
    }
    return node.value;
  }

  all() {
    // Return all items in the queue.
    let valuesArray = [];

    //start at head, if no head return
    if (this.first === null) {
      return;
    } else {
      let currentNode = this.first;
      while (currentNode) {
        valuesArray.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return valuesArray;
  }
}

module.exports = Queue;
