import { IManager } from "../abstraction/manager-contract";
import { Todo } from "../../models/todo.model";
import { readData, writeData } from "../../dao/todo-dao";

export class TodoManager implements IManager<Todo>{
    async fetchRecords(): Promise<Todo[]> {
        try {
            const todos = await readData()
            if (todos)
                if (todos.length > 0)
                    return todos
                else
                    throw new Error('no todos found')
            else
                throw new Error('todos undefined')
        } catch (error) {
            throw error
        }
    }

    async fetchRecord(id: number): Promise<Todo | null> {
        try {
            const todos = await readData()
            if (todos) {
                const found = todos.find(t => t.id === id)
                if (found) {
                    return found
                } else {
                    throw new Error('could not find the record')
                }
            } else
                throw new Error('todos undefined')
        } catch (error) {
            throw error
        }
    }

    async addRecord(obj: Todo): Promise<Todo> {
        try {
            const todos = await readData()
            if (todos) {
                let newTodoId = 1
                if (todos.length > 0) {
                    const lastTodId = todos[todos.length - 1].id
                    newTodoId = lastTodId + 1
                }
                obj.id = newTodoId
                todos.push(obj)
                await writeData(todos)
                return obj
            } else
                throw new Error('todos undefined')
        } catch (error) {
            throw error
        }
    }

    async removeRecord(id: number): Promise<Todo> {
        try {
            const todos = await readData()
            if (todos) {
                const index = todos.findIndex(t => t.id === id)
                if (index !== -1) {
                    const deletedRecords = todos.splice(index, 1)
                    await writeData(todos)
                    return deletedRecords[0]
                } else {
                    throw new Error('could not find the record')
                }
            } else {
                throw new Error('todos undefined')
            }
        } catch (error) {
            throw error
        }
    }

    async updateRecord(obj: Todo, id: number): Promise<Todo> {
        try {
            const todos = await readData()
            if (todos) {
                const found = todos.find(t => t.id === id)
                if (found) {
                    const updatedTodo = {
                        ...found,
                        ...obj,
                        id: id
                    }

                    const index = todos.findIndex(t => t.id === id)
                    todos.splice(index, 1, updatedTodo)
                    await writeData(todos)
                    return updatedTodo
                } else {
                    throw new Error('could not find the record')
                }
            } else
                throw new Error('todos undefined')
        } catch (error) {
            throw error
        }
    }

}