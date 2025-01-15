require('dotenv').config();



const express = require('express')
const mongoose = require('mongoose')
const workoutsRouter = require('./routes/workouts')


const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })


app.use('/api/workouts/' , workoutsRouter)




mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })

.catch((error) => {
    console.log(error)
})


module.exports = app;



