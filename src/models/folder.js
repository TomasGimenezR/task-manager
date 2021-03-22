const mongoose = require('mongoose')

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    tasks: [{
        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    }]
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task