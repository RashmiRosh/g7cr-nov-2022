import { createServer } from "http";
import { config } from "dotenv";
import { HttpMethods } from "./constants/http-methods";
import { ApiController } from "./controller/api-controller";
import { getRoutes, registerRoutes } from "./routes/app-routes";
import { mapRequest } from "./middlewares/request-mapper";

config()
const PORT = process.env.PORT
const server = createServer(
    (req, res) => mapRequest(req, res)
)
const controller = new ApiController()
server.listen(
    PORT,
    () => {
        registerRoutes({
            id: 1,
            path: '/api/todos',
            method: HttpMethods.GET,
            controllerAction: controller.get
        }, {
            id: 2,
            path: /\/api\/todos\/([0-9]+)/,
            method: HttpMethods.GET,
            controllerAction: controller.get
        }, {
            id: 3,
            path: '/api/todos',
            method: HttpMethods.POST,
            controllerAction: controller.post
        }, {
            id: 4,
            path: /\/api\/todos\/([0-9]+)/,
            method: HttpMethods.PUT,
            controllerAction: controller.put
        }, {
            id: 5,
            path: /\/api\/todos\/([0-9]+)/,
            method: HttpMethods.DELETE,
            controllerAction: controller.delete
        })

        console.log(`server is running at http://localhost:${PORT}`)
        console.log(getRoutes())
    }
)