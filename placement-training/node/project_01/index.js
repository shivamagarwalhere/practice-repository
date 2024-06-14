const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000

//MIDDLEWARE - Plugin
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) =>{
    console.log("hello from middleware 1")
    next()
})
app.use((req, res, next) =>{
    console.log("hello from middleware 2")
    return res.end("hey")
})

//ROUTES
app.get('/api/users', (req, res)=>{
    res.send(users)
    //console.log(users)
})

app.get('/users', (req, res)=>{
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html)
})

//REST APIs

app.route('/api/users/:id').get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
.patch((req, res) => {
    //edit the user with id
    const id =  Number(req.params.id)
    const user = users.find(user => user.id === id)

    if (!user)
        return res.status(404).json({message: "User not found"})

    const updates = req.body;
    Object.assign(user, updates);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        if (err)
            return res.statusMessage(500).json({message: "error updating data"})
        return res.json({messsage: "data successfully updated"})
    })
})
.delete((req, res)=>{
    //delete the user with id
    const id =  Number(req.params.id)
    const userIndex = users.findIndex((user) => user.id === id)
    console.log(userIndex)

    if (userIndex === -1)
        return res.status(404).json({message: "User not found"})

    //users.splice(userIndex, 1)[0]
    users.splice(userIndex, 1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
        if (err)
            return res.status(500).json({message: "unable to delete data"})
        return res.json({message: "succesfully deleted user data"})
    })
})

// app.get(`/api/users/:id`, (req, res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })

app.post('/api/users', (req, res) =>{
    //TODO: Create new user
    const body = req.body;
    const newID = users.length + 1
    users.push({...body, id: newID});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
        return res.json({status: "success", id: newID})
    })
    
})

// app.patch('/api/users/:id', (req, res) =>{
//     //TODO: edit the user with id
//     return res.json({status: "pending"})
// })

// app.delete('/api/users/:id', (req, res) =>{
//     //TODO: delete the user with id
//     return res.json({status: "pending"})
// })

app.listen(PORT, ()=>{
    console.log(`server started at port: ${PORT}`)
})