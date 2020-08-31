let express = require('express');
let apps = express();
let courses = require('./routes/courses');
let { app: users } = require('./routes/users');
// const users = require('./routes/users');
apps.use(express.json());
apps.use(express.urlencoded({ extended: false }));

apps.use('/api/courses', courses);
apps.use('/api/students', users);
apps.listen(3000, (err) => {
    if (err)
        console.log(err);
    else console.log("server started successfully")
})