const mongoose = require('mongoose')

mongoose
.connect("mongodb://127.0.0.1:27017/practicedb")
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("db connection error"))

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model("user", userSchema)

module.exports = User;