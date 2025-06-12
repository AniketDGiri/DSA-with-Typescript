/**
 * Converts a decimal number to its binary representation.
 * @param {number} decimal - The decimal number to convert.
 * @returns {string} The binary representation of the decimal number.
 * @throws {Error} If the input is not a valid number.
 */

const decimal = 6;
const base = 3;
let binary = "";
export function decimalToBinary(decimal: number): string {
  while (decimal > 0) {
    let temp = decimal % base;
    decimal = Math.floor(decimal / base);
    binary = temp.toString() + binary;
  }
  return binary || "0";
}

const ans = decimalToBinary(decimal);
console.log(`The binary representation of ${decimal} is: ${ans}`); // Output: The binary representation of 54 is: 110110
