const express = require("express");
const path = require('path');
require('dotenv').config()
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

const validate = require('./routes/auth');
const details = require('./routes/profile');
const courses = require('./routes/courses');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use('/api/validate',validate);
app.use('/profile',details);
app.use('/courses',courses);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server is running on localhost ${port}...`);

})