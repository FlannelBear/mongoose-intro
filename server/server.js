const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./routers/router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/router', router);


app.listen(PORT, (req, res) => {
   console.log('Server up on port: ', PORT);
});