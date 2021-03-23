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

const Folder = mongoose.model('Folder', folderSchema)

module.exports = Folder