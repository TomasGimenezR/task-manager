const mongoose = require('mongoose');
const Task = require('../models/task');

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})
/**
 * Removes all Tasks from Folder before deleting it
 */
folderSchema.pre('remove', async function (next) {
    const folder = this;
    fol = await Task.deleteMany({ folder });
    next();
})

const Folder = mongoose.model('Folder', folderSchema)

module.exports = Folder