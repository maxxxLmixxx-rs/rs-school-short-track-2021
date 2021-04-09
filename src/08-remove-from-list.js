/* eslint-disable */ 

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const removeKFromList = (list, removeValue) => {  
  let [head, prev, current, next] = [list, null, list, list.next];
  
  const movePointer = () => {
    prev = current;
    current = next;
    next = next.next;
  };
  const removeNode = () => {
    if (prev) prev.next = current.next;
    else head = next;
  };

  while (next) {
    if (current.value === removeValue) removeNode();
    movePointer();
  }
  
  return head;
}

module.exports = removeKFromList;
