
export class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  public data: T;

  constructor(_data: T) {
    this.data = _data;
  }
}

export interface ILinkedList<T> {
  isEmpty(): boolean;
  getSize(): number;
  prepend(value: T): Node<T>;
  print(): void;
  append(value: T): Node<T>;
  insert(value: T, index: number): Node<T> | void;
  removeAt(index: number): Node<T> | void;
  search(value: T): null | number;
}
