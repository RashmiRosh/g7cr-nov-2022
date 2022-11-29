import { Router } from "express";
import { inject, injectable } from "inversify";
import { IMPLEMENTATION_TYPES } from "../config/constants";
import { BASE_URL } from "../config/envdata";
import { IController } from "../controllers/abstraction/controller-contract";
import 'reflect-metadata'

@injectable()
export class RouterConfiguration {
    constructor(@inject(IMPLEMENTATION_TYPES.CONTROLLER_IMPLEMENTATION) private controllerObj: IController) {

    }
    configureRoutes() {
        const routerMiddleware = Router()
        //request to fetch all Todos
        routerMiddleware
            .get(BASE_URL, this.controllerObj.getAllAction)

        //request to fecth one Todo
        routerMiddleware
            .get(`${BASE_URL}/:todoId`, this.controllerObj.getAction)

        //request to add a todo
        routerMiddleware
            .post(BASE_URL, this.controllerObj.postAction)

        //request to update existing Todo
        routerMiddleware
            .put(`${BASE_URL}/:todoId`, this.controllerObj.putAction)

        //request to delete an existing Todo
        routerMiddleware
            .delete(`${BASE_URL}/:todoId`, this.controllerObj.deleteAction)

        return routerMiddleware
    }
}