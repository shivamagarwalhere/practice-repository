const arr = [0,1,2,3,4,5]
//can be string, int, mixed, whatever, same type not compulsory
//array is also an object
//resizable, 0-indexed
console.log(arr[5]);
const arr2 = ["shivam", "agarwal", "st", "xaviers"]
const arr3 = new Array(1,2,3,4)

//arrays also have prototype access

console.log(arr2[1].length)
arr2.push('srm-university'); //adding new values

arr3.unshift(9) //inserts at start of an array
arr3.shift() //removes first element

console.log(arr3.includes(5))

const newArr = arr3.join() //comma seperated joined in form of a string
console.log(newArr) 
console.log(arr3)

//splice includes range but slice does not, but mainly splice also removes
// that portion from original array, which slice does not.
const arr4 = arr2.slice(1,3)
console.log("Arr4:", arr4)
console.log("Arr2:", arr2)

const arr5 = arr2.splice(1,3)
console.log("Arr5:",arr5)
console.log("Arr2:",arr2)

arr5.push(arr2)
console.log(arr5) //array inserted at an entry, NOT JOIN!

const arr6 = arr5.concat(arr2) //returns new array

//better way to use spread:
const arr7 = [...arr2, ...arr5]
console.log("ARR7:", arr7);

const flatArray = arr7.flat(2); //2 mentions the depth, can be any number, Infinity also
console.log("flatArray:", flatArray);

console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({name: 'shivam'})) //interesting case, will result in empty array,
//it shouldbe mentioned if arry to be made from keys or values

let a=1, b=2, c=3
console.log(Array.of(a,b,c))