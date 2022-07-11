"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// Initialize count to 0 to count matches
// Find unique values
// Filter out all values of array matching unique value 
// Use count divided by two, rounding down and add to count

function sockMerchant(n, ar) {
  // Write your code here
  // Initialize count of matches
  let count = 0;

  // Unique values for comparison
  const unique = ar.filter((value, index, self) => self.indexOf(value) === index);

  // Go through array and filter out all values matching key
  unique.forEach((value) => {
    // Filter out all index values with matching unique value of comparison
    const filtered = ar.filter((element) => element == value);
    // Round down the count divided by 2
    const pairs = Math.floor(filtered.length / 2);
    // Add to count
    count += pairs;
  });

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
