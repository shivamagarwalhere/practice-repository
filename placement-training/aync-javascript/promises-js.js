//promises reduce callback hell
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //examples: db calls, network calls, cryptography based
    setTimeout(function(){
        console.log("assync task completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async  task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async task 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shivam", email: "shivam@google.com"})
    }, 2000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "shivam", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('completed')
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "promise5", password: "123"})
        }else{
            reject('ERROR: promise5 went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {const response = await promiseFive
    console.log(response)} catch (error){
        console.log(error)
    }
}