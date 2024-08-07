const express = require('express');
const path = require('path')
const {connectToMongoDB} = require('./connect')

const URL = require('./models/url')

const app = express()
const PORT = 8001

connectToMongoDB('mongodb://localhost:27017/practicedb')
.then(() =>console.log("MongoDB Connected"))

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/url', urlRoute)
app.use('/user', userRoute);
app.use('/', staticRoute)

//we use templating engines like EJS (Embedded JavaScript Templating), plug, handlebars
// app.get('/test', async(req, res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls
//     })
// })

app.get('/url/:shortId', async (req, res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push: {
        visitHistory: {
            timestamp: Date.now()
        }
    }})
    res.redirect(entry.redirectURL)
})

app.listen(PORT, ()=>{
    console.log(`Server started at Port: ${PORT}`)
})