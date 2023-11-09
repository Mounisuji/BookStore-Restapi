//const mongoose = require('../config/db');
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type:String,
    required:true,
    unique:true
  },
  author:{
    type:String
  },
  summary:{
    type:String
  }
},
{
    timestamps:true // automatically manage createdAt and updatedAt
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports =BookModel;
