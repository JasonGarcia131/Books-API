require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect(process.env.MONGO_URI)

const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String

})


const Book = mongoose.model('Book', bookSchema)

module.exports = Book