import { LinkedList, Node } from '../Tailed_Linked_List/tailedImplementation'

interface ILinkedListStack<T> {
  push(value: T): Node<T>,
  pop(): T | null;
  peak(): T | null,
  isEmpty(): boolean,
  getSize(): number,
  print(): void
}

export class LinkedListStack<T> implements ILinkedListStack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  public push(value: T) {
    return this.list.prepend(value)
  }

  public pop() {
    return this.list.removeFromFront();
  }

  public peak() {
    return this.list.head?.data ? this.list.head.data : null;
  }

  public isEmpty() {
    return this.list.isEmpty()
  }

  public getSize() {
    return this.list.getSize()
  }

  public print() {
    return this.list.print()
  }
}