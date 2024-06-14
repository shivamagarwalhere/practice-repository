const express = require('express')

const router = express.Router()

// router.get('/api/users', async (req, res)=>{
//     const allDbUsers = await User.find({})
    
//     return res.json(allDbUsers)
//     //res.send(users)
//     //console.log(users)
// })

router.get('/', async (req, res)=>{
    const allDbUsers = await User.find({})
    const html = `
    <ul>
    ${allDbUsers.map(user => `<li>${user.firstName}: ${user.email}</li>`).join("")}
    </ul>`;
    res.send(html)
})

//REST APIs

router.route('/:id')
.get(async (req, res)=>{
    const user = await User.findById(req.params.id)
    //const id = Number(req.params.id);
    //const user = users.find((user) => user.id === id)
    return res.json(user)
})
.patch(async (req, res) => {
    //edit the user with id
    //const id =  Number(req.params.id)
    //const user = users.find(user => user.id === id)
    const user = await User.findByIdAndUpdate(req.params.id, {lastName: 'Changed'})
    return res.json({message: "success"})

    // if (!user)
    //     return res.status(404).json({message: "User not found"})

    // const updates = req.body;
    // Object.assign(user, updates);

    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
    //     if (err)
    //         return res.statusMessage(500).json({message: "error updating data"})
    //     return res.json({messsage: "data successfully updated"})
    // })
})
.delete(async (req, res)=>{
    //delete the user with id
    // const id =  Number(req.params.id)
    // const userIndex = users.findIndex((user) => user.id === id)
    // console.log(userIndex)

    // if (userIndex === -1)
    //     return res.status(404).json({message: "User not found"})
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json({message: "success"})
    // //users.splice(userIndex, 1)[0]
    // users.splice(userIndex, 1)
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
    //     if (err)
    //         return res.status(500).json({message: "unable to delete data"})
    //     return res.json({message: "succesfully deleted user data"})
    // })
})

// app.get(`/api/users/:id`, (req, res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })

router.post('/', async (req, res) =>{
    //TODO: Create new user
    // const body = req.body;
    // const newID = users.length + 1
    // users.push({...body, id: newID});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
    //     return res.json({status: "success", id: newID})
    // })
    const body = req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({message: "all fields are required"})}
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })

    console.log(result)
    return res.status(200).json({message: "succcess"})
    
})

module.exports = router;