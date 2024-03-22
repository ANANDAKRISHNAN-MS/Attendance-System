const express = require("express");
const path = require('path');
const app = express();
require('dotenv').config()
const validate = require('./routes/auth');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use('/api/validate',validate);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server is running on localhost ${port}...`);

})