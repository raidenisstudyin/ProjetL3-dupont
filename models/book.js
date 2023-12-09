const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title : { type:String , required : true },
    author : {type : mongoose.Schema.Types.ObjectId , ref : 'author' },
    summary : String,
    isbn : String  
})

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/book/${this._id}`;
  });

const Book = mongoose.model('book',BookSchema)

module.exports = Book