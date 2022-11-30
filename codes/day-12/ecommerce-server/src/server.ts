import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { AppRoutes } from "./routes/approutes";
import diContainer from "./IoC/inversify.config";
import diTokens from "./constants/di-tokens";
import { ECommerceControllerContract } from "./controller/ecommerce-controller.contract";

config()
const PORT = process.env.PORT || 4000
const BASE_URL = process.env.BASE_URL || '/api/products'

const app = express()
app.use(cors({ origin: '*', methods: '*', allowedHeaders: '*' }))
app.use(json())

const controllerObj = diContainer.get<ECommerceControllerContract>(diTokens.PRODUCTS_CONTROLLER_TOKEN)

const appRoutes = new AppRoutes(controllerObj)
app.use(appRoutes.registerRoutes())

app.listen(
    PORT,
    () => console.log(`ecommerce server is running at http://localhost:${PORT}${BASE_URL}`)
)