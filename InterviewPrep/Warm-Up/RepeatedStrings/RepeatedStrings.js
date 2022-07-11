/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

// Start) s = string to repeat, n = number of characters to look at
    // Get length of string = length
    // Find frequency of 'a'
        // Split into array by character to access
        // Filter then count new array
    // if (length < n)  
        // Repeat string until 

// End) Frequency of the 'a' within n

function repeatedString(s, n) {
    // Write your code here
    // 1) Length of String
    let length = s.length;

    // 2) Count of "a" in string
    let count = (s.split('a').length) - 1;

    // 3) Max occurences of "a" in whole number
    let maxWholeNum = Math.floor(n / length);
    
    // 4) count of total so far of "a"
    let total = count * maxWholeNum;
    
    // 5) Slice the string from start to remainder
    // 6) from there count occurences of 
    // 7) Add to total above and return
    total += (s.slice(0, n % length).split("a").length - 1);
    return total;
}

