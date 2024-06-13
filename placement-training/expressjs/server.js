const ex = require('express')
const myapp = ex()

myapp.listen(4004, (errr) =>{
    if(err) return err;
    else console.log('successful')
})