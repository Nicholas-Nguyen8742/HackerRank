/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let ar = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            let double = nums[i] * 2;
            ar.push(double);
        } else {
            let triple = nums[i] * 3;
            ar.push(triple);
        }
    }
    return ar;
}

