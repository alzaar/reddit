import mongoose from 'mongoose'

// Config
mongoose.promise = global.promise

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be at least 5 characters']
    },
})

const User = mongoose.model('User', userSchema)

export default User