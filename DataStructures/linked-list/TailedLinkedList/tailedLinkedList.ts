import { LinkedList as TailedLinkedList } from './tailedImplementation'

const list = new TailedLinkedList()

console.log("List is empty ? ", list.isEmpty());
console.log("List size : ", list.getSize())
list.print();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.prepend(0)

list.print()

console.log("List size : ", list.getSize())

list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()