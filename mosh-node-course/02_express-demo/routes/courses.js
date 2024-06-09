const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: '1. Node.js'},
    { id: 2, name: '2. React'},
    { id: 3, name: '3. Redux'}
]

router.get('/', (req, res) => {
    // db work: getting data from database
    res.send(courses);
});

// POST !
router.post('/', (req, res) => {

    const result = validateCourse(req.body);

    // if (!req.body.name || req.body.name.length < 3) {
    //     // 400 Bad Request
    //     res.status(400).send('Name is required and should be at least 3 characters');
    //     return;
    // } 

    const { error } = validateCourse(req.body); // object destructure
    if(error) return res.status(400).send(result.error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    }
    courses.push(course);
    res.send(course);
})



// multiple parametrs.
// /api/courses/1
router.get('/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course not found');// 404;
    res.send(course);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });


router.put('/:id', (req, res) => {

    // step1. look up the course. if not existing, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course not found');// 404;


    // step2. validate. If invalid - return 400 - Bad request

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // object destructure
    if(error) return res.status(400).send(result.error.details[0].message);

    // step3. Update the course and return it
    course.name = req.body.name;
    res.send(course);

})

router.delete('/:id', (req, res) => {
    // look up the course
    // if non exist, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course not found');// 404;

    // delete the course
    const index = courses.indexOf(course);
    courses.splice(index,1);

    // return deleted course
    res.send(course);
})

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return schema.validate(course);

}

module.exports = router;