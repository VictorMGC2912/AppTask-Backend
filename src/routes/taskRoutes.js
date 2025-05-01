const { getTask, createTask, deleteTask } = require("../controllers/taskControllers");

const taskRouter = require('express').Router();

//RUTAS
taskRouter.get('/', getTask);
taskRouter.post('/', createTask);
taskRouter.delete('/:id', deleteTask);

module.exports = taskRouter;