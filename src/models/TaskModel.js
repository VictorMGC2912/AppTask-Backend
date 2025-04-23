const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = mongoose.model("Task", taskSchema, "Task");

module.exports = task;