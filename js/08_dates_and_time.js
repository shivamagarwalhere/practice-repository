//date represents a single moment in tiem in platform independent format beginning from midnight at January 1, 1970 UTC
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

let userDate = new Date(2023, 0, 23) //month start from 0 in js (when writing single)
console.log(userDate.toLocaleString());

let timestamp = Date.now() //time in miliseconds
console.log(timestamp.toLocaleString());
console.log(myDate.getTime())
//above 2 lines used to compare dates.

console.log(userDate.getMonth());

console.log(userDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'UTC'
}));