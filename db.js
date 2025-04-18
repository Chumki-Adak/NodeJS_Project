const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://@cluster0.vtzxp.mongodb.net/book_register_db?retryWrites=true&w=majority&appName=Cluster0'

module.exports = () => mongoose.connect(dbUri)
