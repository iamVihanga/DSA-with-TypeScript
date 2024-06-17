import { LinkedListStack } from './implementation'

const stack = new LinkedListStack<number>()

console.log("Is Stack empty ? ", stack.isEmpty())

stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

console.log("Stack Size : ", stack.getSize())
stack.print();

console.log(stack.pop());

console.log(stack.peak());
