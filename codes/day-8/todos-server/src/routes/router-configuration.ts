import { Router } from "express";
import { BASE_URL } from "../config/envdata";

const routerMiddleware = Router()

//request to fetch all Todos
routerMiddleware.get(
    BASE_URL,
    (req, res) => { }
)

//request to fecth one Todo
routerMiddleware.get(
    `${BASE_URL}/:todoId`,
    (req, res) => {

    }
)

//request to add a todo
routerMiddleware.post(
    BASE_URL,
    () => { }
)

//request to update existing Todo
routerMiddleware.put(
    `${BASE_URL}/:todoId`,
    () => { }
)

//request to delete an existing Todo
routerMiddleware.delete(
    `${BASE_URL}/:todoId`,
    () => { }
)

export default routerMiddleware