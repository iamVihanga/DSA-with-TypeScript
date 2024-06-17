import { LinkedListQueue } from './implementation'

const queue = new LinkedListQueue<number>();

console.log("Is Queue empty ? ", queue.isEmpty())

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.print();

queue.dequeue();

queue.print();

queue.peak();

console.log("Queue Size : ", queue.getSize());