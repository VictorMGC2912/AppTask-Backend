const { getTask, createTask } = require("../controllers/taskControllers");

const taskRouter = require('express').Router();

//RUTAS
taskRouter.get('/', getTask);
taskRouter.post('/', createTask);

module.exports = taskRouter;