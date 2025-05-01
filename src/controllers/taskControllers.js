const taskModel = require("../models/TaskModel");

//MOSTRAR TODAS LAS TAREAS
const getTask = async (req, res) => {
    try{
        const allTasks = await taskModel.find();
        const resTask = allTasks.map(task => {
            return {
                id: task.id,
                title: task.title,
                completed: task.completed
            }
        });
        res.status(200).json({
            status: 'succeeded',
            data: resTask,
            error: null
        });
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null,
            error: error.message
        });
    }
};

//CREAR UNA TAREA
const createTask = async (req, res) => {
    try{
        const taskData = req.body;
        const newTask = await taskModel({
            title: taskData.title,
            completed: taskData.completed
        })
        await newTask.save()
        console.log(newTask)
        res.status(200).json({
            status: "succeeded",
            data: newTask,
            error: null
        });
    }catch(error){
        res.status(500).json({
            status: "failed",
            data: null,
            error: error.message
        });
    }
};

//BORRAR TAREA
const deleteTask = async (req, res) => {
    try{
        const id = req.params.id;
        await taskModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        });
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null,
            error: error.message
        });
    }
};

module.exports = {
    getTask,
    createTask,
    deleteTask
}