class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current !== null) {
      current = current.nextNode;
      size++;
    }
    return size;
  }

  getHead() {
    return this.head === null ? undefined : this.head.value;
  }

  tail() {
    if (this.head === null) return undefined;

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0) {
      return undefined;
    }

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current.value;
      }

      current = current.nextNode;
      count++;
    }

    return undefined;
  }

  pop() {
    if (this.head === null) return undefined;

    const deleted = this.head.value;
    this.head = this.head.nextNode;
    return deleted;
  }

  contains(value) {
    let current = this.head;

    if (current === null) return false;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    if (current === null) return -1;

    while (current !== null) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }

    return -1;
  }

  toString() {
    let current = this.listHead;
    const values = [];

    while (current !== null) {
      values.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    if (values.length === 0) return "";

    return values.join(" -> ") + " -> null";
  }
}

export { LinkedList };
