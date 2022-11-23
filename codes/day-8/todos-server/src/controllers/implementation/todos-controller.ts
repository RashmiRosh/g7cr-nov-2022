import { IController } from "../abstraction/controller-contract";
import { IBusinessComponent } from "../../bo/abstraction/bo-contract";
import { Todo } from "../../models/todo.model";
import { Request, Response } from "express";
import generateResponse from "../../utils/response-generator";
import { injectable, inject } from "inversify";
import { IMPLEMENTATION_TYPES } from "../../config/constants";
import 'reflect-metadata'

@injectable()
export class TodosController implements IController {
    constructor(@inject(IMPLEMENTATION_TYPES.BO_IMPLEMENTATION) private todosBo: IBusinessComponent<Todo>) {

    }

    getAction = async (req: Request, res: Response): Promise<void> => {
        try {
            const todoId = Number(req.params.todoId)
            const todo = await this.todosBo.get(todoId)
            const response = generateResponse<Todo>('found record', 200, todo)

            // res.writeHead(200, { 'Content-Type': 'application/json' })
            res.send(response)

        } catch (error: any) {
            const errResponse = generateResponse<Todo>(error.message, 500)

            // res.writeHead(500, { 'Content-Type': 'application/json' })
            res.send(errResponse)
        }
    }

    getAllAction = async (req: Request, res: Response): Promise<void> => {
        try {
            const todos = await this.todosBo.getAll()
            const response = generateResponse<Todo>('found records', 200, todos)

            // res.writeHead(200, { 'Content-Type': 'application/json' })
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Todo>(error.message, 500)

            // res.writeHead(500, { 'Content-Type': 'application/json' })
            res.send(errResponse)
        }
    }

    postAction = async (req: Request, res: Response): Promise<void> => {
        try {
            const todoData = <Todo>req.body
            const added = await this.todosBo.add(todoData)
            const response = generateResponse<Todo>('added successfully', 201, added)

            // res.writeHead(201, { 'Content-Type': 'application/json' })
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Todo>(error.message, 500)

            // res.writeHead(500, { 'Content-Type': 'application/json' })
            res.send(errResponse)
        }
    }

    putAction = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = Number(req.params.todoId)
            const todoData = <Todo>req.body
            const updated = await this.todosBo.update(todoData, id)
            const response = generateResponse<Todo>('updated record', 201, updated)

            // res.writeHead(201, { 'Content-Type': 'application/json' })
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Todo>(error.message, 500)

            // res.writeHead(500, { 'Content-Type': 'application/json' })
            res.send(errResponse)
        }
    }

    deleteAction = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = Number(req.params.todoId)
            const deleted = await this.todosBo.remove(id)
            const response = generateResponse<Todo>('deleted record', 201, deleted)

            // res.writeHead(201, { 'Content-Type': 'application/json' })
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Todo>(error.message, 500)

            // res.writeHead(500, { 'Content-Type': 'application/json' })
            res.send(errResponse)
        }
    }
}