import express from "express";
import cors from "cors";
import { PORT_NUMBER, BASE_URL } from "./config/envdata";
import { RouterConfiguration } from "./routes/router-configuration";
import container from "./Ioc/inversify.config";
import { IController } from "./controllers/abstraction/controller-contract";
import { IMPLEMENTATION_TYPES } from "./config/constants";


const app = express()
const jsonMiddleware = express.json()
const corsMiddleware = cors()

const controllerObj = container.get<IController>(IMPLEMENTATION_TYPES.CONTROLLER_IMPLEMENTATION)
const routerConfig = new RouterConfiguration(controllerObj)
const routerMiddleware = routerConfig.configureRoutes()

app.use(corsMiddleware)
app.use(jsonMiddleware)
app.use(routerMiddleware)

app.listen(
    PORT_NUMBER,
    () => console.log(`Todos server is running at http://localhost:${PORT_NUMBER}${BASE_URL}`)
)