function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("shivam", 12, true)
const userTwo = new User("agarwal", 15, true)
console.log(userTwo.greeting)
userOne.greeting()
//constructor function always gives a new instance