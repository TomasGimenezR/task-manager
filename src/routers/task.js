const express = require('express')
const Task = require('../models/task')
// const auth = require('../middleware/auth')
const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        title: 'To-Do List',
    })
});

router.post('/task', (req, res) => {
    const new_task = new Task({
        description: req.body.description
    })
})

module.exports = router;