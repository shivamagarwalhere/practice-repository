//const http = require('http')
const fs = require('fs')
const url = require('url')
const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    return res.send('hello from home page' + "HEY" + req.query.name)
})

app.get('/about', (req, res) =>{
    return res.send('hello from about page')
})

//handler function handles incoming function, it is the callback function
function myHandler(req, res){
    if (req.url === '/favicon.ico') return res.end()
        const log = `${Date.now()}: ${req.url}  New  request recieved\n`
        const myURL= url.parse(req.url, true)
        console.log(myURL)
        fs.appendFile('log.txt',log, (err, data) =>{
            switch(myURL.pathname){
                case '/': res.end("Home Page");
                break
                case '/about': 
                const username = myURL.query.myname
                res.end(`hi ${username}`);
                break
                case '/contact': res.end("Contact Page");
                break
                default: res.end("404 not found");
                break
            }
        })
}

//const myServer = http.createServer(app)

//myServer.listen(8000, ()=>{
//    console.log('server started')
//})

app.listen(8000, ()=>console.log('server sstarted'))