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
    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastItem = this.getTail(this.head);
      lastItem.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size(node = this.head) {
    if (node === null) {
      return 0;
    }
    return 1 + this.size(node.nextNode);
  }

  getHead() {
    return this.head;
  }

  getTail(node = this.head, cb) {
    if (node === null) {
      return null;
    }
    if (node.nextNode === null) {
      return node;
    }
    return this.getTail(node.nextNode);
  }

  at(index) {
    let node = this.head;
    let counter = 0;
    while (node !== null) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.nextNode;
    }
    return null;
  }
}

const list = new LinkedList();
list.append("Cat");
list.append("Dog");
list.prepend("Elephant");

console.log(list.at(2));
// console.log(list);
