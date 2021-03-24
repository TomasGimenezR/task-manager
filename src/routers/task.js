const express = require('express')
const Task = require('../models/task')
const Folder = require('../models/folder')
const router = new express.Router()

router.get('', async (req, res) => {
    let tasks = await Task.find({});
    let folders = await Folder.find({})

    res.render('index', {
        title: 'To-Do List',
        layout: 'main',
        tasks,
        folders
    })
});

router.post('/task', async (req, res) => {
    const new_task = new Task({
        description: req.body.description,
        // owner: 
    })

    try {
        await new_task.save()
        res.status(201).redirect('/')
    }
    catch (e) {
        console.log(e);
    }
})

router.get('/tasks/:id', async (req, res) => {
    const tasks = await Task.find({ folder: req.params.id })
    console.log(req.params.id)
    console.log('tasks', tasks)
    res.send(tasks)
})

router.patch('/task/:id', async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        task.description = req.body.description;
        await task.save();
        res.status(200).send(task);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.delete('/task', async (req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.body.task_id);

        res.status(200).send(task);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/complete-task', async (req, res) => {
    try {
        let task = await Task.findById(req.body.task_id);
        task.changeCompletion()
    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/folder', async (req, res) => {
    const new_folder = new Folder({
        name: req.body.name
    })

    try {
        await new_folder.save()
        res.status(201).redirect('/')
    }
    catch (e) {
        console.log(e);
    }
})

router.delete('/folder', async (req, res) => {
    const folder = await Folder.findById(req.body.folder_id)
    folder.remove()
    res.status(201).send(folder)
})

router.post('/moveToFolder', async (req, res) => {
    try {

        let folder = await Folder.findById(req.body.folder_id)
        let task = await Task.findById(req.body.task_id)

        task.folder = folder
        await task.save()

        res.status(200).send()
    } catch (e) {
        res.status(500).send(e)
    }

})

module.exports = router;