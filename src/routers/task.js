const express = require('express')
const Task = require('../models/task')
// const auth = require('../middleware/auth')
const router = new express.Router()

router.get('', async (req, res) => {
    let tasks = await Task.find({});

    res.render('index', {
        title: 'To-Do List',
        tasks
    })
});

router.post('/task', async (req, res) => {
    const new_task = new Task({
        description: req.body.description,
        // owner: 
    })

    try {
        await new_task.save()
        let tasks = await Task.find({});
        res.status(201).render('index', {
            tasks
        });
    }
    catch (e) {
        console.log(e);
    }
})

module.exports = router;