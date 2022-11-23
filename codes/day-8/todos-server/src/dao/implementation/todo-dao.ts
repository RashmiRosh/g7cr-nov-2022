import { readFileSync, writeFileSync } from "fs";
import { injectable } from "inversify";
import { FILE_PATH } from "../../config/envdata";
import { Todo } from "../../models/todo.model";
import { IDao } from "../abstraction/dao-contract";

@injectable()
export class TodoDao implements IDao<Todo>{
    async writeData(arr: Todo[]): Promise<void> {
        try {
            writeFileSync(FILE_PATH, JSON.stringify(arr))
        } catch (error) {
            throw error
        }
    }
    async readData(): Promise<Todo[]> {
        try {
            const data = readFileSync(FILE_PATH)
            const todos = JSON.parse(data.toString())
            return todos.map(
                (todo: any): Todo => {
                    return {
                        id: todo.id,
                        title: todo.title,
                        completed: todo.completed,
                        userId: todo.userId
                    }
                }
            )
        } catch (error) {
            throw error
        }
    }
}