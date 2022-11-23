import { IBusinessComponent } from "../abstraction/bo-contract";
import { Todo } from "../../models/todo.model";
import { IDao } from "../../dao/abstraction/dao-contract";

export class TodoBusinessComponent implements IBusinessComponent<Todo>{

    constructor(private dao: IDao<Todo>) {
    }

    async add(data: Todo): Promise<Todo> {
        try {
            const todos = await this.dao.readData()
            let id = 1
            if (todos.length > 0) {
                id = todos[todos.length - 1].id + 1
            }
            data.id = id
            todos.push(data)
            await this.dao.writeData(todos)
            return data
        } catch (error) {
            throw error
        }
    }

    async update(data: Todo, id: number): Promise<Todo> {
        try {
            const todos = await this.dao.readData()
            const index = todos.findIndex((todo) => todo.id === id)
            if (index !== -1) {
                data.id = id
                todos.splice(index, 1, data)
                await this.dao.writeData(todos)
                return data
            } else
                throw new Error(`the todo with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    async remove(id: number): Promise<Todo> {
        try {
            const todos = await this.dao.readData()
            const index = todos.findIndex((todo) => todo.id === id)
            if (index !== -1) {
                const deleted = todos.splice(index, 1)[0]
                await this.dao.writeData(todos)
                return deleted
            } else
                throw new Error(`the todo with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    async get(id: number): Promise<Todo> {
        try {
            const todos = await this.dao.readData()
            const found = todos.find((todo) => todo.id === id)
            if (found) {
                return found
            } else
                throw new Error(`the todo with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    async getAll(): Promise<Todo[]> {
        try {
            const todos = await this.dao.readData()
            if (todos.length > 0) {
                return todos
            } else
                throw new Error(`no record found`)
        } catch (error) {
            throw error
        }
    }

}