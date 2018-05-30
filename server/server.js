// REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// VARIABLES
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./routers/router');

// app uses (static and parser)
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// app uses router
app.use('/router', router);

// Require in our Mongoose Scehma
const Book = require('./modules/models/book.schema');

// START MONGO CONNECTION VIA MONGOOSE
// Connection between server and database
const DATABASE_NAME = 'library'; // variable for the databases name
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`; // variable for the url of our database
// Connecting DB and Server
mongoose.connect(DATABASE_URL);
mongoose.connection.on('connected', () => { // this is an event listening, listening for a connection between the server and the database
   console.log(`Mongoose is connected to ${DATABASE_URL}`); // console.log in terminal when connected
});
// If there is an issue connecting the server and db, an error is returned and this will log the error to our terminal
mongoose.connection.on('error', (error) => {
   console.log(`Mongoose connection error: ${error}`);
});

// END MONGO CONNECTION VIA MONGOOSE

app.listen(PORT, (req, res) => {
   console.log('Server up on port: ', PORT);
});