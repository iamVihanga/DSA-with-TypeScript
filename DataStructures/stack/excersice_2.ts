/**
 * 1.2) Stack Data Structure
 *  -   Excersice #02
 * 
 *  -   Excersice : Base Converter
 */

import { Stack } from "./implementation";

function baseConverter(decimalNumber: number, base: number) {
  const remStack = new Stack<number>();
  let rem: number | null = null;
  let baseString: string = '';
  const digits: string = "0123456789ABCDEF";

  // Perform division by base
  while (decimalNumber > 0) {
    rem = Math.floor(decimalNumber % base);
    remStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  // Prepare baseString by loopthrough stack
  while (!remStack.isEmpty) {
    baseString += digits[remStack.pop() as number];
  }

  return baseString;
}

// Convert 120 to Binary
console.log(baseConverter(120, 2))

// Convert 120 to Octal
console.log(baseConverter(120, 8))

// Convert 120 to HexaDecimal
console.log(baseConverter(120, 16))

// Convert 1933 to HexaDecimal
console.log(baseConverter(1933, 16))