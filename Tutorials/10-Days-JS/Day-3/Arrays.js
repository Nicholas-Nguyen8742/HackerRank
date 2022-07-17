/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let sorted = nums.sort((a,b) => a - b);
    let lastIndex = sorted.length - 1;
    
    for (let i = lastIndex; i >= 0; i--) {
        if (sorted[i] != sorted[lastIndex]) {
            return sorted[i];
        }
    }
}
