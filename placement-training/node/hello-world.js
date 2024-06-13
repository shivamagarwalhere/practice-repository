console.log("Hello World")

//NodeJs only gives us core functionlities of JS, all window objects, dom etc are not available as they are not required in server-side
//direct name du like http, fs then it searches the file in built-in node package or installed external packages, and if i use ./ it imports from current project directory
const math = require('./math')

console.log(math.add(5,2))
console.log(math.sub(5,2))