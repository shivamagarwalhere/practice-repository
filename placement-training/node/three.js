const fs = require('fs')
fs.readFile('sample.txt', (err, data)=>{
    if (err)
        return err;
    console.log('file read successfully');
})