const user = {
    name: 'shivam',
    price: 999,
    
    welcomeMessage(){
        console.log(`hello ${this.name}`)
    }
}

user.welcomeMessage();
user.name = 'agarwal'
user.welcomeMessage()

function chai(){
    let username = shivam
    console.log(this.username) //results in undefined
}

const chai = function(){
    let username = shivam
    console.log(this.username) //results in undefined
}

const chai = () => {
    let username = shivam
    console.log(this.username) //results in undefined
}

const addThree = (num1, num2) => {
    return num1+num2
}//valid

const addThree2 = (num1, num2) => (num1+num2) //valid, return keyword not needed without curly braces

const myArray = [1,2,3,4]
myArray.forEach()