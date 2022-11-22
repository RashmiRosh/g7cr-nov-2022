import { IncomingMessage, ServerResponse } from "http"
import { IManager } from "../manager/abstraction/manager-contract";
import { TodoManager } from "../manager/implementation/todo-manager"
import { ApiResponse } from "../models/api-response.mode";
import { Todo } from "../models/todo.model";
import { generateResponse } from "../utils/response-generator";

/*
export class ApiController {
    private todoManager: IManager<Todo>;

    constructor(private request: IncomingMessage, private response: ServerResponse) {
        this.todoManager = new TodoManager()
    }
    async get() {
        try {
            if (this.request.url === '/api/todos') {
                const todos = await this.todoManager.fetchRecords()

                const getAllResponse = generateResponse<Todo>('found records', 200, todos)

                this.response.writeHead(200, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(getAllResponse))

            } else if (this.request.url?.match(/\/api\/todos\/([0-9]+)/)) {
                const id = this.request.url.split('/')[3]

                const todo = await this.todoManager.fetchRecord(+id)

                const getResponse: ApiResponse<Todo> = generateResponse<Todo>('found record', 200, todo)

                this.response.writeHead(200, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(getResponse))

            } else {
                const errResponse: ApiResponse<Todo> = generateResponse<Todo>('requested resource not found', 404)
                this.response.writeHead(404, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(errResponse))
            }
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            this.response.writeHead(500, { 'Content-Type': 'application/json' })
            this.response.end(JSON.stringify(errResponse))
        }
    }
    async post() {
        try {
            if (this.request.url === '/api/todos') {
                this.request.on(
                    'data',
                    async (todoData: any) => {
                        try {
                            const todo = <Todo>JSON.parse(todoData.toString())
                            const addedObj = await this.todoManager.addRecord(todo)
                            const addResponse = generateResponse<Todo>('added successfully', 201, addedObj)

                            this.response.writeHead(201, { 'Content-Type': 'application/json' })
                            this.response.end(JSON.stringify(addResponse))
                        } catch (error: any) {
                            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
                            this.response.writeHead(500, { 'Content-Type': 'application/json' })
                            this.response.end(JSON.stringify(errResponse))
                        }
                    }
                )
            } else {
                const errResponse: ApiResponse<Todo> = generateResponse<Todo>('requested resource not found', 404)
                this.response.writeHead(404, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(errResponse))
            }
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            this.response.writeHead(500, { 'Content-Type': 'application/json' })
            this.response.end(JSON.stringify(errResponse))
        }
    }
    async put() {
        try {
            if (this.request.url?.match(/\/api\/todos\/([0-9]+)/)) {
                const id = this.request.url.split('/')[3]
                this.request.on(
                    'data',
                    async (todoData: any) => {
                        try {
                            const updatedObj = await this.todoManager.updateRecord(
                                <Todo>JSON.parse(todoData.toString()), +id)
                            const updateResponse = generateResponse<Todo>('updated record', 201, updatedObj)
                            this.response.writeHead(201, { 'Content-Type': 'application/json' })
                            this.response.end(JSON.stringify(updateResponse))
                        } catch (error: any) {
                            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
                            this.response.writeHead(500, { 'Content-Type': 'application/json' })
                            this.response.end(JSON.stringify(errResponse))
                        }
                    }
                )
            } else {
                const errResponse: ApiResponse<Todo> = generateResponse<Todo>('requested resource not found', 404)
                this.response.writeHead(404, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(errResponse))
            }
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            this.response.writeHead(500, { 'Content-Type': 'application/json' })
            this.response.end(JSON.stringify(errResponse))
        }
    }
    async delete() {
        try {
            if (this.request.url?.match(/\/api\/todos\/([0-9]+)/)) {
                const id = this.request.url.split('/')[3]
                const deletedObj = await this.todoManager.removeRecord(+id)
                const deleteResponse = generateResponse<Todo>('deleted record', 201, deletedObj)
                this.response.writeHead(201, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(deleteResponse))

            } else {
                const errResponse: ApiResponse<Todo> = generateResponse<Todo>('requested resource not found', 404)
                this.response.writeHead(404, { 'Content-Type': 'application/json' })
                this.response.end(JSON.stringify(errResponse))
            }
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            this.response.writeHead(500, { 'Content-Type': 'application/json' })
            this.response.end(JSON.stringify(errResponse))
        }
    }
}
*/

export class ApiController {
    private todoManager: IManager<Todo>;

    constructor() {
        this.todoManager = new TodoManager()
    }
    get = async (request: IncomingMessage, response: ServerResponse) => {
        try {
            let id = -1
            const words = request.url?.split('/')
            if (words && words[3]) {
                id = +words[3]
            }
            if (id === -1) {
                const todos = await this.todoManager.fetchRecords()

                const getAllResponse = generateResponse<Todo>('found records', 200, todos)

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(getAllResponse))

            } else {

                const todo = await this.todoManager.fetchRecord(+id)

                const getResponse: ApiResponse<Todo> = generateResponse<Todo>('found record', 200, todo)

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(getResponse))

            }
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(errResponse))
        }
    }
    post = async (request: IncomingMessage, response: ServerResponse) => {
        try {
            request.on(
                'data',
                async (todoData: any) => {
                    try {
                        const todo = <Todo>JSON.parse(todoData.toString())
                        const addedObj = await this.todoManager.addRecord(todo)
                        const addResponse = generateResponse<Todo>('added successfully', 201, addedObj)

                        response.writeHead(201, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify(addResponse))
                    } catch (error: any) {
                        const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
                        response.writeHead(500, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify(errResponse))
                    }
                }
            )

        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(errResponse))
        }
    }
    put = async (request: IncomingMessage, response: ServerResponse) => {
        try {
            const id = Number(request.url?.split('/')[3])
            request.on(
                'data',
                async (todoData: any) => {
                    try {
                        const updatedObj = await this.todoManager.updateRecord(
                            <Todo>JSON.parse(todoData.toString()), id)
                        const updateResponse = generateResponse<Todo>('updated record', 201, updatedObj)
                        response.writeHead(201, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify(updateResponse))
                    } catch (error: any) {
                        const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
                        response.writeHead(500, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify(errResponse))
                    }
                }
            )

        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(errResponse))
        }
    }
    delete = async (request: IncomingMessage, response: ServerResponse) => {
        try {
            const id = Number(request.url?.split('/')[3])
            const deletedObj = await this.todoManager.removeRecord(id)
            const deleteResponse = generateResponse<Todo>('deleted record', 201, deletedObj)
            response.writeHead(201, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(deleteResponse))
        } catch (error: any) {
            const errResponse: ApiResponse<Todo> = generateResponse<Todo>(error.message, 500)
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(errResponse))
        }
    }
}