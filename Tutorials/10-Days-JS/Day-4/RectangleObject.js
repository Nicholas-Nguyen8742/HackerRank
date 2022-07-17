/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let length = a;
    let width = b;
    let perimeter = 2 * (a + b);
    let area = (a * b);
    let rect = {
        length,
        width, 
        perimeter,
        area
    }
    return rect;
}