//Stack -> primitive types
// heap -> non primitive types
// in stack we get copy of data and in heap we get reference, so og value is modified
let name = "shivam"; //-> stored in stack
let anotherName  = name;
anotherName = "agarwal"
// so anotherName will change not name

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
} //=> stored in heap

let userTwo = userOne
userTwo.email = "user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//value changed for both since reference was passed.