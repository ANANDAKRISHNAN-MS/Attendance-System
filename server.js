const express = require("express");
const path = require('path');
require('dotenv').config()
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

const validate = require('./routes/auth');
const details = require('./routes/profile');
const courses = require('./routes/courses');
const update = require('./routes/update')
const markAttendance = require('./routes/attendance')

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use('/api/validate',validate);
app.use('/profile',details);
app.use('/courses',courses);
app.use('/update',update);
app.use('/attendance',markAttendance);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server is running on localhost ${port}...`);

})