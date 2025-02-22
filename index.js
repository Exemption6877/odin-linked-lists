class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    function recursiveCheck(item) {
      if (item.nextNode == null) {
        return item;
      } else {
        return recursiveCheck(item.nextNode);
      }
    }
    if (this.head == null) {
      this.head = newNode;
    } else {
      const lastItem = recursiveCheck(this.head);
      lastItem.nextNode = newNode;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
