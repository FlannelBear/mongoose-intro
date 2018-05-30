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
   res.sendStatus(200);
});

router.delete('/', (req, res) => {
   res.sendStatus(200);
});


module.exports = router;