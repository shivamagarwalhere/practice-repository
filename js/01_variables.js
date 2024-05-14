const accountId = 1445523
let accountEmail = "shivam@shivam.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// const: used for non-modifiable data
// error: TypeError: Assignment to constant variable.
// accountId = 2
console.log(accountId);

accountEmail = "agarwal@agarwal.com"
accountPassword = "121334"
accountCity = "Kolkata"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// variables can be declared either using let and var.
// var is no more used as scope didn't work earlier. (so var was not scope bound)
// in later versions, let was introduced, which is scope bound

// variable declared without let/var, is undefined. used in cases we don't know how it's gonna be used later.