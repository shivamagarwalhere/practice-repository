if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a) //error: block scope in if condition only
//console.log(b) //error: block scope in if condition only
console.log(c) //var c will be printed; it is in global scope

function one(){
    const name = "shivam"
    
    function two(){
        const webiste = "shivam.com"
        console.log(name)
    }

    // console.log(website) =>cannot be accessed as scope issue
    two()
}

one()

// ********************** H O I S T I N G **************************
console.log(addOne(5)) //no issue; executes correctly
function addOne(num){
    return num+1;
}

addTwo(5) //error; as yaha variable mei assign krre, functions hoist hote hai
const addTwo = function(num){
    return num+2
}

