const mongoose = require('mongoose');
const Schema = mongoose.Schema; // uses mongoose dependency to set up Schema, a shortcut for mongoose.Schema

const bookSchema = new Schema(
   {
      title: { type: String, required: true, unique: true }, // setting the type of data for the title property of our schema, the fact that it is required, and it must be unique
      author: { type: String, required: true },
      published: { type: Date }
   }   
);

module.exports = mongoose.model('book', bookSchema);