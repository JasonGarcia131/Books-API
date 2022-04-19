require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//Configure
const PORT = process.env.PORT


//Middleware
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))



//Index
app.get('/', (req,res)=>{
    console.log('Get from index page')
    res.send('Index Page')
})


const bookController = require('./controllers/books-controllers.js')
app.use('/books', bookController)

app.get('*', (req,res)=>{

    res.send('error404')
})

app.listen(PORT, ()=>{
    console.log('Server is listening on port: ', PORT)
})