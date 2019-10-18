import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
//Middleware
import bodyParser from 'body-parser'

//Mongodb
mongoose.connect('mongodb://localhost:27017/database', { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('Connected to MongoDB')
})

const app = express()

//Middleware Setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Router redirect
app.use('/api', routes)

export default app