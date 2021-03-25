const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
        default: null
    }
})

/**
 * Changes completion of Task. If it was incomplete, this completes it. If it was complete, this incompletes it.
 */
taskSchema.methods.changeCompletion = async function () {
    try {
        task = this;
        task.completed = !task.completed;
        await task.save()
    } catch (e) {
        throw new Error('An error occurred attempting to change completion:', e)
    }
}

const Task = mongoose.model('Task', taskSchema)

module.exports = Task