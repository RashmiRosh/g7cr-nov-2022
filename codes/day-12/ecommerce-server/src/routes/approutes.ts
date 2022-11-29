import { Router } from "express";

const BASE_URL = process.env.BASE_URL || '/api/products'

export class AppRoutes {
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