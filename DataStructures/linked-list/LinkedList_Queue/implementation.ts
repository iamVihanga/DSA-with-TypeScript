import { LinkedList, Node } from '../TailedLinkedList/tailedImplementation'

interface ILinkedListQueue<T> {
  enqueue(value: T): Node<T>,
  dequeue(): T | null,
  print(): void;
  peak(): T | null,
  isEmpty(): boolean,
  getSize(): number
}

export class LinkedListQueue<T> implements ILinkedListQueue<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  public enqueue(value: T): Node<T> {
    return this.list.append(value);
  }

  public dequeue(): T | null {
    return this.list.removeFromFront();
  }

  public print(): void {
    this.list.print()
  }

  public peak(): T | null {
    return this.list.head ? this.list.head.data : null
  }

  public getSize(): number {
    return this.list.getSize()
  }

  public isEmpty(): boolean {
    return this.list.isEmpty()
  }
}