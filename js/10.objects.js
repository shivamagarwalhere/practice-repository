//singleton: when declared with constructors and not literals
const user = {}
user.id = "123abc"
user.name = "shivam"
user.isLoggedIn = false

const userTwo = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: 'shivam',
            lastname: 'agarwal'
        }
    }
}

const obj1 = {1: 'a', 2: 'b', 3: 'c'}
const obj2 = {4: 'd', 5: 'e', 6: 'f'}
// const obj3 = {obj1, obj2} //each obj as single obj
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2} //spread FTW!
console.log(Object.keys(user)); //retrns an array
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('age'))
console.log('*******************************************')

//OBJECT DESTRUCUTRING and API
 const course = {
    coursename: 'js-in-hindi',
    price: '999',
    instructor: 'hitesh-ji'
 }

 const {instructor} = course
 console.log(instructor)
//basically curly braces can be used to destrucutre

//JSON
{
    'name': 'shivam',
    'course': 'js-in-hindi',
    'price': 'free'
}

[
    {},
    {},
    {}
]


//object literals
console.log('*******************************************')
const symb = Symbol("key1")

const JsUser = {
    [symb]: "keyy1",
    name: 'shivam',
    age: 21,
    location: 'jaipur',
    email: 'shivam@shivam.com',
    isLoggedIn: false,
    lastLoginDays: ['sunday', 'monday']
}

console.log(JsUser.email)
console.log(JsUser['email'])

JsUser.email = 's@shivamm.com'
//Object.freeze(JsUser)
JsUser.email = 'shivam@gmail.com' //error will not come but changes will not propogate

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`)
}
console.log(JsUser.greeting())