import { Router } from "express";
import diTokens from "../constants/di-tokens";
import { ECommerceControllerContract } from "../controller/ecommerce-controller.contract";
import { injectable, inject } from "inversify";
import 'reflect-metadata'

const BASE_URL = process.env.BASE_URL || '/api/products'

@injectable()
export class AppRoutes {

    constructor(@inject(diTokens.PRODUCTS_CONTROLLER_TOKEN) private productsController: ECommerceControllerContract) {

    }

    registerRoutes(): Router {
        const routerMiddleware = Router()

        routerMiddleware.get(BASE_URL, this.productsController.getAllAction)
        routerMiddleware.get(`${BASE_URL}/:id`, this.productsController.getAction)
        routerMiddleware.post(BASE_URL, this.productsController.postAction)
        routerMiddleware.put(`${BASE_URL}/:id`, this.productsController.putAction)
        routerMiddleware.delete(`${BASE_URL}/:id`, this.productsController.deleteAction)

        return routerMiddleware
    }
}