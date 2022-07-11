/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
// Steps split into array, at each character
// Two counters: Sealevel, valleys
// Valley Status starts at false


function countingValleys(steps, path) {
    // Write your code here
    let pathAr = path.split("");
    let valleyCount = 0;
    let currentSeaLevel = 0;
    let valleyStatus = false;

    pathAr.forEach(step => {
        step == "U" ? currentSeaLevel++ : currentSeaLevel--;
        if (currentSeaLevel < 0 && !valleyStatus) {
            valleyCount++; 
            valleyStatus = true;
        } else if (currentSeaLevel >= 0 && valleyStatus) {
            valleyStatus = false;
            }
    })
    return valleyCount;
}
