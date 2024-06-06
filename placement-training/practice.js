//write a script for finding factorial of a given number
let num = 5
let factorial = 1
for (let index = 1; index <= num; index++) {
    factorial *=index
}
console.log(factorial)

//write a script for finding sum of elements of an array
let arr = new Array(1,2,3,4,5)
let sum = 0
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
console.log(sum)

//write a script for converting given number to a binary string
console.log(factorial.toString(2))

//write a script for creating object and grouping them based on a particular field


//write a script to get an element by a class and display them
const x = document.getElementsByClassName("a");
document.write(x.item)