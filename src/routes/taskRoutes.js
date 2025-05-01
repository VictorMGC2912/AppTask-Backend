const { getTask, createTask, deleteTask, toggleTask } = require("../controllers/taskControllers");

const taskRouter = require('express').Router();

//RUTAS
taskRouter.get('/', getTask);
taskRouter.post('/', createTask);
taskRouter.delete('/:id', deleteTask);
taskRouter.put('/:id', toggleTask);

module.exports = taskRouter;