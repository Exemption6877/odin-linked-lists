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

  findLast(item) {
    if (item.nextNode === null) {
      return item;
    }
    return this.findLast(item.nextNode);
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastItem = this.findLast(this.head);
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
}

// const list = new LinkedList();
// list.append("Cat");
// list.append("Dog");
// list.prepend("Elephant");

// console.log(list);
