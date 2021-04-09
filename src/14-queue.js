const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  initialize(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  enqueue(value) {
    if (!this.length) this.initialize(value);
    else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  dequeue() {
    const { value } = this.head;
    this.head = this.head.next;
    this.length--;
    return value;
  }
}

module.exports = Queue;
