/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */
// 1) Initialize Jump Counter
// 2) Go through the array 
    // 3) If next step is 1, jump two steps
    // 4) If next second step ahead is 0, jump two steps jump += 2
    // 5) if next second step is 1, jump one. jump++
// 6) Return Counter

function jumpingOnClouds(c) {
    // Write your code here
    // 1) Initialize the counter for jumps
    let jumpCount = 0;
    // Start for while loop
    let index = 0;
    // When using index of array do array.length - 1
    while (index < c.length - 1) {
        // if two steps ahead = 0 jump ahead two
        if (c[index + 2] === 0) {
            jumpCount++;
            index += 2;
        } else {
            jumpCount ++;
            index++;
        }
    }
    return jumpCount;
}