/**
 * 1.1) Stack Data Structure
 *  -   Stack Implementation
 */

export class Stack<T> {
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

  get isEmpty(): boolean {
    if (this._stack.length > 0) {
      return false
    } return true
  }

  get count(): number {
    return this._stack.length;
  }
}