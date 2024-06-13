const fs = require('fs')
const os = require('os')

//fs.writeFileSync('./test.txt', 'hey, this is second attempt at writing')
//second attempt overrriden the previous content

// fs.writeFile('./test.txt', "Hello Async", (err) =>{
//     if(err) return err
// })

// const res = fs.readFileSync('./sample.txt', 'utf-8')
// console.log(res)

// fs.readFile('./sample.txt', 'utf-8', (err, result)=>{
//     if(err) console.log("error:", err)
//     else console.log(result)
// })

//async kuchh return nhi krta, sync return krta hai, async callback expect krta hai

//appending:
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt', `Shivam\n`)
// console.log(fs.statSync('./test.txt'))

//BLOCKING..
// const result =  fs.readFileSync('test.txt','utf-8')
// console.log(result)
//console.log(os.cpus().length)