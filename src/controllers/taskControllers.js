const taskModel = require("../models/TaskModel");

//MOSTRAR TODAS LAS TAREAS
const getTask = async (req, res) => {
    try{
        const allTasks = await taskModel.find();
        const resTask = allTasks.map(task => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
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
            description: taskData.description,
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

//ACTUALIZAR ESTADO DE LA TAREA
const toggleTask = async (req, res) => {
    try{
        const id = req.params.id;
        const { title, description, completed } = req.body

        const taskAux = await taskModel.findById(id);

        if(!taskAux) return res.status(404).send('La tarea no existe');

        if(title) {
            taskAux.title = title
        }
        if(description) {
            taskAux.description = description
        }
        if(completed = false){
            taskAux.completed = true;
        }
        
        await taskAux.save();

        res.status(200).json({
            status: "succeeded",
            data: taskAux,
            error: null
        })

    }catch(error){
        res.status(500).json({
            status: "failed",
            data: null,
            error: error.message
        })

    }
};

module.exports = {
    getTask,
    createTask,
    deleteTask,
    toggleTask
}