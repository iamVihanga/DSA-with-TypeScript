
class Stack<T> {
  _stack: T[]

  constructor(stack?: T[]) {
    this._stack = stack || [];
  }

  push(item: T) {
    this._stack.push(item);
  }

  pop(): T | undefined {
    return this._stack.pop();
  }

  clear() {
    this._stack = []
  }

  peek(): T {
    return this._stack[this._stack.length - 1];
  }

  print() {
    console.log(this._stack.toString())
  }

  get empty(): boolean {
    if (this._stack.length > 1) {
      return false
    } return true
  }

  get count(): number {
    return this._stack.length;
  }
}

const stack = new Stack<number>();


stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.pop()

stack.push(7);

console.log(stack.peek());

stack.print();