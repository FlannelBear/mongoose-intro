const express = require('express');
const router = express.Router();

// Connect database to router
// Require in our Mongoose Scehma
const Book = require('../models/book.schema');


router.get('/', (req, res) => {
   Book.find() // Empty parens will tell the database to find all information
         .then( data => {
            // data is the information sent from the database
            console.log(`Got stuff back from mongo: ${data}`);
            res.send(data);
         }) // passing in an empty object will 
         .catch( error => {
            console.log(`Error from mongo: ${error}`);
            res.sendStatus(500);
         });
});

router.post('/', (req, res) => {
      console.log(req.body);
      let book = new Book(req.body); // create a new Book schema using the POST data
      book.save()
            .then( () => {
                  res.sendStatus(201); // Something good happened! If this is outside of then, it will run regardless of how the Book.save() went.
            })
            .catch( error => {
                  console.log(`Error adding book: ${error}`);
            }); // call the save method on the new Book schema to save it to your database (mongoose syntax)
});
 
/// Delete doesn't use data, so we will use params instead
router.delete('/', (req, res) => {
      let bookId = req.query._id;
      console.log(bookId);
      // data is req.body, params are req.query
      Book.findByIdAndRemove(bookId)
         .then(( ) => {
            // Good servers always respond
            res.sendStatus(200);
         })
         .catch(error => {
            console.log(`Error removing book: ${error}`);
            res.sendStatus(500); // BAD STATUS
         });
   });


module.exports = router;