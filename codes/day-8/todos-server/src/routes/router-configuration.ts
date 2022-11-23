import { Router } from "express";
import { BASE_URL } from "../config/envdata";

import { IController } from "../controllers/abstraction/controller-contract";
import { TodosController } from "../controllers/implementation/todos-controller";
import { IBusinessComponent } from "../bo/abstraction/bo-contract";
import { TodoBusinessComponent } from "../bo/implementation/todo-bo";
import { IDao } from "../dao/abstraction/dao-contract";
import { TodoDao } from "../dao/implementation/todo-dao";
import { Todo } from "../models/todo.model";

const routerMiddleware = Router()

const todosDao: IDao<Todo> = new TodoDao()
const todosBo: IBusinessComponent<Todo> = new TodoBusinessComponent(todosDao)
const todosController: IController = new TodosController(todosBo)

//request to fetch all Todos
routerMiddleware
    .get(BASE_URL, todosController.getAllAction)

//request to fecth one Todo
routerMiddleware
    .get(`${BASE_URL}/:todoId`, todosController.getAction)

//request to add a todo
routerMiddleware
    .post(BASE_URL, todosController.postAction)

//request to update existing Todo
routerMiddleware
    .put(`${BASE_URL}/:todoId`, todosController.putAction)

//request to delete an existing Todo
routerMiddleware
    .delete(`${BASE_URL}/:todoId`, todosController.deleteAction)

export default routerMiddleware