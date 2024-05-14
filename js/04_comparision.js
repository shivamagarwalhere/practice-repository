//console.log(2>1);
//OP in boolean form

// console.log("0" > 1);
// console.log("02" > 1);
//op is true, which means it got converted to int

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* reason is than an eqality check == and
comparisions > < >= <= work differently.
comparisions convert null into a number, treating
it as 0, that's why >= is true and >0 is false */

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//strict check ===
// checks values and their datatypes
console.log("2"==2) //true
console.log("2"===2) //false

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false