
export class Node<T> {
  public data: T;
  public next: Node<T> | null = null;

  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}

interface ILinkedList<T> {
  isEmpty(): boolean,
  getSize(): number,
  print(): void;
  prepend(value: T): Node<T>,
  append(value: T): Node<T>,
  removeFromFront(): T | null,
  removeFromEnd(): T | null
}

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public print(): void {
    if (this.isEmpty()) {
      console.log("List is Empty !")
    } else {
      let curr: Node<T> | null = this.head;
      let listValues = '';

      while (curr) {
        listValues += `${curr.data}, `;
        curr = curr.next
      }

      console.log(listValues);
    }
  }

  public prepend(value: T): Node<T> {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;

    return node;
  }

  public append(value: T): Node<T> {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }

    this.size++;
    return node;
  }

  public removeFromFront(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head) {
      let value = this.head.data;
      this.head = this.head.next

      this.size--;

      return value;
    } else return null
  }

  public removeFromEnd(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.tail && this.head) {
      let value = this.tail.data;

      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        let prev = this.head;

        while (prev.next === this.tail) {
          prev = prev.next
        }

        prev.next = null;
        this.tail = prev;
      }

      this.size--;
      return value;
    } else return null;
  }
}