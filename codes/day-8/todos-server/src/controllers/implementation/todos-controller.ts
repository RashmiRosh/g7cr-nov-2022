import { IController } from "../abstraction/controller-contract";
import { IBusinessComponent } from "../../bo/abstraction/bo-contract";
import { Todo } from "../../models/todo.model";
import { Request, Response } from "express";

export class TodosController implements IController {
    constructor(private todosBo: IBusinessComponent<Todo>) {

    }

    async getAction(req: Request, res: Response): Promise<void> {
        try {
            const todoId = Number(req.params.todoId)
            const todo = await this.todosBo.get(todoId)
        } catch (error) {

        }
    }

    async getAllAction(req: Request, res: Response): Promise<void> {
        try {
            const todos = await this.todosBo.getAll()
        } catch (error) {

        }
    }

    async postAction(req: Request, res: Response): Promise<void> {
        try {
            const todoData = <Todo>req.body
            const added = await this.todosBo.add(todoData)
        } catch (error) {

        }
    }

    async putAction(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.toodoId)
            const todoData = <Todo>req.body
            const updated = await this.todosBo.update(todoData, id)
        } catch (error) {

        }
    }

    async deleteAction(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.todoId)
            const deleted = await this.todosBo.remove(id)
        } catch (error) {

        }
    }
}