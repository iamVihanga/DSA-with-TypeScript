type PriorityQueueItem<T> = { item: T, priority: number };

export class PriorityQueue<T> {
  _queue: PriorityQueueItem<T>[];

  constructor(queue?: PriorityQueueItem<T>[]) {
    this._queue = queue || [];
  }

  isEmpty(): boolean {
    if (this._queue.length > 0) {
      return false
    } return true
  }

  print() {
    console.log(this._queue)
  }

  enqueue(item: PriorityQueueItem<T>) {
    if (this.isEmpty()) {
      this._queue.push(item)
    } else {
      let added: boolean = false;

      for (let i = 0; i < this._queue.length; i++) {
        if (item.priority < this._queue[i].priority) {
          this._queue.splice(i, 0, item);
          added = true;
          break;
        }
      }

      if (!added) {
        this._queue.push(item)
      }
    }
  }

  dequeue(): PriorityQueueItem<T> | undefined {
    return this._queue.shift()
  }

  front(): PriorityQueueItem<T> {
    return this._queue[0];
  }

  get size(): number {
    return this._queue.length;
  }
}

const priorityQueue_1 = new PriorityQueue<string>();

priorityQueue_1.enqueue({ item: "Vihanga", priority: 2 });
priorityQueue_1.enqueue({ item: "Harry", priority: 4 });
priorityQueue_1.enqueue({ item: "Peter", priority: 1 });
priorityQueue_1.enqueue({ item: "Juan", priority: 5 });
priorityQueue_1.enqueue({ item: "Jessey", priority: 3 });
