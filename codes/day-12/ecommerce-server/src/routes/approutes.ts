import { Router } from "express";
import { injectable, inject } from "inversify";
import diTokens from "../constants/di-tokens";
import { ECommerceControllerContract } from "../controller/ecommerce-controller.contract";

const BASE_URL = process.env.BASE_URL || '/api/products'

@injectable()
export class AppRoutes {

    constructor(@inject(diTokens.PRODUCTS_CONTROLLER_TOKEN) private productsController: ECommerceControllerContract) {

    }

    registerRoutes(): Router {
        const routerMiddleware = Router()

        routerMiddleware.get(BASE_URL, (req, res) => { })
        routerMiddleware.get(`${BASE_URL}/:id`, () => { })
        routerMiddleware.post(BASE_URL, () => { })
        routerMiddleware.put(`${BASE_URL}/:id`, () => { })
        routerMiddleware.delete(`${BASE_URL}/:id`, () => { })

        return routerMiddleware
    }
}