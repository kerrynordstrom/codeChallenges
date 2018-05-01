function loop_size(node) {
  let slow = node;
  let fast = node.getNext();
  let size = 0;

  while (slow !== fast) {

    slow = slow.getNext();
    fast = fast.getNext().getNext();
  }

  size++;

  slow = slow.getNext();

  while (slow !== fast) {
    size++;
    slow = slow.getNext();
  }

  return size;
}