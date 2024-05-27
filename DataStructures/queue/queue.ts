

export class Queue<T> {
  _queue: T[];

  constructor(queue?: T[]) {
    this._queue = queue || [];
  }

  enqueue(item: T) {
    this._queue.push(item);
  }

  dequeue(): T | undefined {
    return this._queue.shift()
  }

  clear() {
    this._queue = [];
  }

  print() {
    console.log(this._queue.toString())
  }

  get front(): T {
    return this._queue[0]
  }

  get isEmpty(): boolean {
    if (this._queue.length > 0) {
      return false
    } return true;
  }

  get size(): number {
    return this._queue.length;
  }
}