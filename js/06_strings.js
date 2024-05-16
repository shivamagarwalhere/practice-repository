const name = "shivam"
const repoCount = 7
//console.log(name + repoCount + "Value");

//string interpolation
//console.log(`Hello my name is ${name} and my repo cont is ${repoCount}`);

const gameName = new String('maniac')
// -> this indexes the list also
// console.log(gameName[5]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-6,2);
console.log(anotherString)

const string3 = "     maniac    "
console.log(string3.trim())

const url = "https://shivam.com/shivam%20agarwal"
console.log(url.replace('%20', '-'))
console.log(url.includes('agarwal'))

const string4 = "shivam-agarwal-st-xaviers";
console.log(string4.split('-'))