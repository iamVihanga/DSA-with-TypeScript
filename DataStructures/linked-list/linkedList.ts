import { Node, type ILinkedList } from './implementation'

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  public isEmpty(): boolean {
    if (this.size === 0) {
      return true
    } else return false
  }

  public getSize(): number {
    return this.size
  }

  public print(): void {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let currentNode: Node<T> | null = this.head;
      let printString: string = "";

      while (currentNode) {
        printString += currentNode.data + " ";
        currentNode = currentNode.next;
      }

      console.log(printString)
    }
  }

  // Prepend : Insert node to the start
  public prepend(value: T): Node<T> {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      /**
       * If list isn't empty,
       * 1. Set current head as "next" of new node
       * 2. Assign new node as Head
       */
      node.next = this.head;
      this.head = node;
    }
    this.size++

    return node;
  }

  // Append : Add node to end of the list 
  public append(value: T): Node<T> {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      /**
       * If list isn't empty,
       * 1. Get last node of the list
       * 2. Set last node's next to new Node
       */

      // This function use recursive search,
      const getLatestNode = (node: Node<T>): Node<T> => {
        return node.next ? getLatestNode(node.next) : node;
      }

      const lastNode = getLatestNode(this.head!);

      node.prev = lastNode;
      lastNode.next = node;
    }

    this.size++;

    return node;
  }

  // Insert : Insert node at specific index
  public insert(value: T, index: number): void | Node<T> {
    if (index < 0 || index > this.getSize()) {
      return;
    } else if (index === 0) {
      return this.prepend(value)
    } else {
      const node = new Node(value);
      let prevNode: Node<T> = this.head!;

      for (let i = 0; i < index; i++) {
        prevNode = prevNode.next!;
      }

      node.next = prevNode.next;
      prevNode.next = node;

      return node;
    }
  }

  // Remove From : Removes a Node from specific index
  public removeAt(index: number): void | Node<T> {
    if (index < 0 || index >= this.size) {
      return;
    }

    let removedNode: Node<T>;

    if (index === 0) {
      removedNode = this.head!;
      this.head = this.head?.next!;
    } else {
      let prevNode: Node<T> = this.head!;

      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next!
      }

      removedNode = prevNode.next!;
      prevNode.next = removedNode.next;
    }

    this.size--;

    return removedNode!;
  }

  // Search : Search for an specific value in linked list
  public search(value: T): null | number {
    if (this.isEmpty()) {
      return null;
    } else {
      let term: number = -1; // defines linked list element's index

      const searchForVal = (node: Node<T>): number => {
        term++;

        if (node.data !== value) {
          searchForVal(node.next!)
        }

        return term;
      }

      return searchForVal(this.head!);
    }
  }
}

const list = new LinkedList<number>();

console.log("Is list empty : ", list.isEmpty());
console.log("Get list size : ", list.getSize());

list.append(10)   // HEAD
list.append(20)   // 0
list.append(30)   // 1
list.append(40);  // 2
list.append(60);  // 3

list.insert(50, 3);

list.append(70);
list.append(80);

list.removeAt(6);

list.print()

console.log(list.search(80));
