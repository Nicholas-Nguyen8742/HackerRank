/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const string = s.split('');
    let vowels = [];
    let others = [];
    const vowelRegex = /[aeiou]/g;
    for (let i = 0; i < string.length; i++) {
        let index = string[i];
        if (index.match(vowelRegex)) {
            vowels.push(index);
        } else {
            others.push(index);
        }
    }    
    vowels.forEach(element => console.log(element));
    others.forEach(element => console.log(element));
}