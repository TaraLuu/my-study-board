const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

const {errorHandler} = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/task',require('./routes/taskRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))