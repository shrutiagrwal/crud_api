var express = require('express');
var app = express.Router();
let student = [{
        "id": 1,
        "name": "Batman"
    },
    {
        "id": 2,
        "name": "Joker"
    },
    {
        "id": 3,
        "name": "Shepherd"
    }
]

//get all students
app.get('/', (req, res) => {
    res.json({ data: student, error: null })
});
//create a new student
app.post('/', (req, res) => {
    let id = student.length + 1;
    let name = req.body.name;
    if (!name)
        return res.json({ error: "enter the name" });
    else {
        student.push({ id, name });
        return res.json({ success: true })
    }
})
module.exports = app;