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

  // I need to hide defaults to prevent passing anything inside getTail()
  getTail(node = this.head) {
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

  // make a link to this child become null
  // i need to find a parent of this node
  pop() {
    let node = this.head;
    let prev = null;

    if (node === null) return;

    if (node.nextNode === null) {
      this.head = null;
      return;
    }

    while (node.nextNode !== null) {
      prev = node;
      node = node.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    function findNodeValue(node) {
      if (node.value === value) {
        return true;
      } else if (node.nextNode === null) {
        return false;
      } else {
        return findNodeValue(node.nextNode);
      }
    }
    return findNodeValue(this.head);
  }

  find(value) {
    let node = this.head;
    let index = 0;
    while (node !== null) {
      if (node.value === value) {
        return index;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let node = this.head;
    let output = "";
    while (node !== null) {
      output = output.concat(`( ${node.value} )`);
      if (node.nextNode !== null) {
        output = output.concat(" -> ");
      }

      node = node.nextNode;
    }
    return output.concat(` -> ${null}`);
  }
}

const list = new LinkedList();
list.append("Cat");

// list.pop();
// list.pop();
list.pop();

console.log(list.toString());
// console.log(list.find("Dog"));
// console.log(list.contains("Elephant"));
// console.log(list);
// console.log(list.at(2));
// console.log(list);
