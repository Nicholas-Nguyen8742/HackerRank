/*
 * Create the function factorial here
 */

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}