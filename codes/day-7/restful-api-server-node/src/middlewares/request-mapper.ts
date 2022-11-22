import { IncomingMessage, ServerResponse } from "http";
import { ApiResponse } from "../models/api-response.mode";
import { Route } from "../models/route.model";
import { Todo } from "../models/todo.model";
import { getRoutes } from "../routes/app-routes";
import { generateResponse } from "../utils/response-generator";

export function mapRequest(req: IncomingMessage, res: ServerResponse) {
    if (req.url) {
        const all = getRoutes()
        let apiToCall
        let errResponse: ApiResponse<Todo> | undefined;
        for (let index = 0; index < all.length; index++) {
            let validUrl = false
            const r = all[index];
            if (req.method === r.method) {
                if (r.path instanceof RegExp) {
                    if (req.url?.match(r.path)) {
                        validUrl = true
                    }
                }
                if (req.url === r.path) {
                    validUrl = true
                }
            }
            if (!validUrl) {
                errResponse = generateResponse<Todo>('requested resource not found', 404)
            } else {
                apiToCall = r.controllerAction
                break;
            }
        }
        if (apiToCall) {
            apiToCall(req, res)
        }
        if (errResponse) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(errResponse))
        }
    }
}