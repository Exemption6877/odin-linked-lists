class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    function findLast(item) {
      if (item.nextNode == null) {
        return item;
      } else {
        return findLast(item.nextNode);
      }
    }
    if (this.head == null) {
      this.head = newNode;
    } else {
      const lastItem = findLast(this.head);
      lastItem.nextNode = newNode;
    }
  }
}
