const express = require('express')
//const fs = require('fs')
//const users = require('./MOCK_DATA.json')
const mongoose = require('mongoose')

const { logReqRes } = require('./middlewares')
const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')

const app = express();
const PORT = 8000

//SCHEMA
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     jobTitle: {
//         type: String
//     },
//     gender: {
//         type: String
//     }
// }, {timestamps: true})


//CONNECTION
connectMongoDb("mongodb://127.0.0.1:27017/practicedb")
// mongoose.connect("mongodb://127.0.0.1:27017/practicedb").then(()=>console.log("mongodb connected")).catch((err)=>console.log("db connection error"))
// const User = mongoose.model("user", userSchema)

//MIDDLEWARE - Plugin
app.use(express.urlencoded({extended: false}))
app.use(logReqRes("log.txt"))
// app.use((req, res, next) =>{
//     console.log("hello from middleware 1")
//     next()
// })
// app.use((req, res, next) =>{
//     console.log("hello from middleware 2")
//     //return res.end("hey")
//     next()
// })

//ROUTES
// app.get('/api/users', async (req, res)=>{
//     const allDbUsers = await User.find({})
    
//     return res.json(allDbUsers)
//     //res.send(users)
//     //console.log(users)
// })

// app.get('/users', async (req, res)=>{
//     const allDbUsers = await User.find({})
//     const html = `
//     <ul>
//     ${allDbUsers.map(user => `<li>${user.firstName}: ${user.email}</li>`).join("")}
//     </ul>`;
//     res.send(html)
// })

// //REST APIs

// app.route('/api/users/:id')
// .get(async (req, res)=>{
//     const user = await User.findById(req.params.id)
//     //const id = Number(req.params.id);
//     //const user = users.find((user) => user.id === id)
//     return res.json(user)
// })
// .patch(async (req, res) => {
//     //edit the user with id
//     //const id =  Number(req.params.id)
//     //const user = users.find(user => user.id === id)
//     const user = await User.findByIdAndUpdate(req.params.id, {lastName: 'Changed'})
//     return res.json({message: "success"})

//     // if (!user)
//     //     return res.status(404).json({message: "User not found"})

//     // const updates = req.body;
//     // Object.assign(user, updates);

//     // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
//     //     if (err)
//     //         return res.statusMessage(500).json({message: "error updating data"})
//     //     return res.json({messsage: "data successfully updated"})
//     // })
// })
// .delete(async (req, res)=>{
//     //delete the user with id
//     // const id =  Number(req.params.id)
//     // const userIndex = users.findIndex((user) => user.id === id)
//     // console.log(userIndex)

//     // if (userIndex === -1)
//     //     return res.status(404).json({message: "User not found"})
//     const user = await User.findByIdAndDelete(req.params.id)
//     return res.json({message: "success"})
//     // //users.splice(userIndex, 1)[0]
//     // users.splice(userIndex, 1)
//     // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
//     //     if (err)
//     //         return res.status(500).json({message: "unable to delete data"})
//     //     return res.json({message: "succesfully deleted user data"})
//     // })
// })

// // app.get(`/api/users/:id`, (req, res) =>{
// //     const id = Number(req.params.id);
// //     const user = users.find((user) => user.id === id)
// //     return res.json(user)
// // })

// app.post('/api/users', async (req, res) =>{
//     //TODO: Create new user
//     // const body = req.body;
//     // const newID = users.length + 1
//     // users.push({...body, id: newID});
//     // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
//     //     return res.json({status: "success", id: newID})
//     // })
//     const body = req.body
//     if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//         return res.status(400).json({message: "all fields are required"})}
//     const result = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title
//     })

//     console.log(result)
//     return res.status(200).json({message: "succcess"})
    
// })

// app.patch('/api/users/:id', (req, res) =>{
//     //TODO: edit the user with id
//     return res.json({status: "pending"})
// })

// app.delete('/api/users/:id', (req, res) =>{
//     //TODO: delete the user with id
//     return res.json({status: "pending"})
// })

app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`)
})