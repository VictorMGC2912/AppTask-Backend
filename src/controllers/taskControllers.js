const taskModel = require("../models/TaskModel");

//MOSTRAR TODAS LAS TAREAS

const getTask = async (req, res) => {
    try{
        const allTasks = await taskModel.find();
        const resTask = allTasks.map(task => {
            return {
                title: title,
                completed: completed
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

module.exports = {
    getTask
}