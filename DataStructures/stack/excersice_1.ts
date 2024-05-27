/**
 * 1.1) Stack Data Structure
 *  -   Excersice #01
 * 
 *  -   Excersice : Decimal to Binary Programme using Stack
 */

import { Stack } from "./implementation";

function convertToBinary(decimalNumber: number): string {
  let remStack = new Stack<number>();
  let rem: number | null = null;
  let binaryString: string = "";

  // Perform division by 2 operation and push remaining to Stack
  while (decimalNumber > 0) {
    rem = Math.floor(decimalNumber % 2);
    remStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  remStack.print()

  // Prepare binary string by loopthrough stack
  while (!remStack.isEmpty) {
    binaryString += remStack.pop()?.toString()
  }

  return binaryString;
}

// Convert decimal 5 to binary
console.log(convertToBinary(5));

// Convert decimal 10 to binary
console.log(convertToBinary(10));

// Convert decimal 20 to binary
console.log(convertToBinary(20))

// Convert decimal 120 to binary
console.log(convertToBinary(120))