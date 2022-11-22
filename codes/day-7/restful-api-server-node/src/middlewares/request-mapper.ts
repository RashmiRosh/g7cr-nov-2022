import { IncomingMessage, ServerResponse } from "http";
import { ApiResponse } from "../models/api-response.mode";
import { Route } from "../models/route.model";
import { Todo } from "../models/todo.model";
import { getRoutes } from "../routes/app-routes";
import { generateResponse } from "../utils/response-generator";

export function mapRequest(req: IncomingMessage, res: ServerResponse) {
    if (req.url) {
        const all = getRoutes()
        const route = all.find(
            (r) => {
                if (r.method === req.method) {
                    if (typeof (r.path) === 'string') {
                        if (req.url === r.path)
                            return true
                        else
                            return false
                    } else if (r.path instanceof RegExp) {
                        if (req.url?.match(req.url))
                            return true
                        else
                            return false
                    } else
                        return false
                } else
                    return false
            }

        )
        if (route) {
            route.controllerAction(req, res)
        } else {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>('requested resource not found', 404)
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(errResponse))
        }
    } else {
        const errResponse: ApiResponse<Todo> = generateResponse<Todo>('url undefined', 500)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(errResponse))
    }
}