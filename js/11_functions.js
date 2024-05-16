function myname(){
    console.log("shivam");
    // console.log("h");
    // console.log("i");
    // console.log("v");
    // console.log("a");
    // console.log("m");
}

myname()

function add(num1, num2){
    let result = num1+num2;
    return result
}

console.log(add(3,4))
//if no argument passed in parametereized function,it takes 'undefined'

function calculatePrice(...num1){ //REST Opertor
    return num1
}
console.log(calculatePrice(200,400,500,600))

const user = {
    name: 'shivam',
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)