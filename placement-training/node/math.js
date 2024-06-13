// function add(a,b) {
//     return a+b   
// }
// //this is a private function, we need to export it to make it public

// function sub(a, b){
//     return a-b;
// }


//module.exports can be used only once, cause it overrides with the last declaration, show we use objects to export multiple functions
// module.exports = {
//     addFn: add, 
//     subFn: sub
// }


//below are anonymous functions, no name, just properties
exports.add = (a,b) => a+b;

exports.sub = (a, b) => a-b;