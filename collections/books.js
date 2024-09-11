const mongoose = require('mongoose')

const BookStruct = new mongoose.Schema({
    Judul: String,
    Penulis: String,
    Genre: String,
    Format: String,
    Tanggal: {
        type: Date,
        default: Date.now 
    }
})
const Book = mongoose.model('book', BookStruct);
module.exports = Book;