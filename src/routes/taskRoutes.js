const { getTask } = require("../controllers/taskControllers");

const taskRouter = require("express").Router();

//RUTAS
taskRouter.get('/', getTask);