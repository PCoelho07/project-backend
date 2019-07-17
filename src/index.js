const express = require('express')
const router = require('./routes')
const mongoose = require('mongoose')


const port = 3000

const app = express();


mongoose.connect('mongodb+srv://express:pedro123@cluster0-yc7s1.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => console.log(`Listening port ${port}`))
