const score = 400 //400
const balance = new Number(100) //Number: 100
console.log(balance.toString()); //100
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.56789
console.log(otherNumber.toPrecision(3)); //3 digits only, priprity before decimal (23.5678 => 23.6 and 123.567 => 124)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ++++++++++++++ Math +++++++++++++++++++++

//default already there
console.log(Math); //op: Object
console.log(Math.abs(-69));
console.log(Math.round(4.3));

console.log(Math.random()); //value from 0 to 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+10)