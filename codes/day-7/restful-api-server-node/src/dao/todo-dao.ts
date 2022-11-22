import { config } from "dotenv";
import { readFileSync, writeFileSync } from "fs";
import { Todo } from "../models/todo.model";

config()
const FILE_PATH = process.env.FILE_PATH

export async function readData(): Promise<Todo[]> {
    if (FILE_PATH) {
        const todos = readFileSync(FILE_PATH)
        return <Todo[]>JSON.parse(todos.toString())
    } else {
        throw new Error('file path undefined')
    }
}
export async function writeData(todos: Todo[]): Promise<void> {
    if (FILE_PATH) {
        writeFileSync(FILE_PATH, JSON.stringify(todos))
    } else {
        throw new Error('file path undefined')
    }
}